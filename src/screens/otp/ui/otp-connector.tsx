import { styled } from "@shared/ui/theme"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Alert } from "react-native"
import { Otp } from "./otp"
import { FullscreenLoader, Keyboard } from "@shared/ui/organisms"
import { TKeyboardButton } from "@shared/types"
import { setGuestToken, useConfirmAuth } from "@features/confirm-auth"
import { useStore } from "effector-react"
import { $enteredOtpCode, $otpCode, $otpId, setEnteredOtpCode, setOtpCode, setOtpId, useOtp } from "@features/otp"
import { $authPhone } from "@features/phone-auth"
import { useTimer } from "@shared/hooks"

const TOTAL_ATTEMPTS_COUNT = 5
const TIMER_DURATION = 180

type Props = {
    onExitButtonClick: () => void,
    onConfirmAuthSuccess: () => void,
    onConfirmAuthError: () => void
}

export const OtpConnector = ({ onExitButtonClick, onConfirmAuthSuccess, onConfirmAuthError }: Props) => {
    const enteredOtpCode = useStore($enteredOtpCode)
    const otpId = useStore($otpId)
    const otpCode = useStore($otpCode)
    const phone = useStore($authPhone)
    const {
        postConfirmAuth,
        isLoading
    } = useConfirmAuth()
    const { 
        timeLeft,
        isTimeExpired
    } = useTimer(TIMER_DURATION, 1)
    const { 
        getOtpCode,
        isOtpValid,
        validate,
        attemptsCount
    } = useOtp()

    const errorMessage = useMemo(
        () => `Неверный код. Осталось ${TOTAL_ATTEMPTS_COUNT - attemptsCount}`,
        [attemptsCount]
    )

    const checkAuthConfirmed = useCallback((enteredOtpCode: string) => {
        postConfirmAuth({
            otpId: otpId,
            phone: phone,
            otpCode: enteredOtpCode
        }, {
            onSuccess: data => {
                setGuestToken(data.guestToken)
                onConfirmAuthSuccess()
            },
            onError: onConfirmAuthError
        })
    }, [postConfirmAuth, otpId, phone, setGuestToken, onConfirmAuthSuccess, onConfirmAuthError])

    const validateOtp = useCallback((enteredOtpCode: string) => {
        const isOtpValid = validate(enteredOtpCode)
        if (isOtpValid) {
            checkAuthConfirmed(enteredOtpCode)
            return
        }

        if (attemptsCount === 5) {
            Alert.alert(
                "Вы ввели неверно код 5 раз",
                "Данная сессия авторизации будет сброшена!",
                [{
                    text: "Выход",
                    onPress: onExitButtonClick
                }]
            )
        }
    }, [isOtpValid, attemptsCount, onExitButtonClick, checkAuthConfirmed, validate])

    const handleDefaultKeyPress = useCallback((updatedOtpCode: string) => {
        if (updatedOtpCode.length === otpCode.length) {
            validateOtp(updatedOtpCode)
            setEnteredOtpCode(updatedOtpCode)
            return
        } 
        
        if (updatedOtpCode.length < otpCode.length) {
            setEnteredOtpCode(updatedOtpCode)
            return
        }
    }, [otpCode, validateOtp, setEnteredOtpCode])

    const handleTimerKeyPress = useCallback(() => {
        if (isTimeExpired) {
            getOtpCode({ phone: phone }, {
                onSuccess: data => {
                    setOtpId(data.otpId)
                    setOtpCode(data.otpCode)
                }
            })                  
        }
    }, [isTimeExpired, setOtpCode, setOtpId, getOtpCode])

    const onKeyPress = useCallback((keyboardButton: TKeyboardButton) => {
        switch (keyboardButton.type) {
            case "default":
                const updatedOtpCode = enteredOtpCode + keyboardButton.value
                handleDefaultKeyPress(updatedOtpCode)
                break
            case "delete":
                setEnteredOtpCode(enteredOtpCode.slice(0, -1))
                break
            case "timer":
                handleTimerKeyPress()
                break
            case "cancel":
                break
        }
    }, [enteredOtpCode, setEnteredOtpCode, handleDefaultKeyPress, handleTimerKeyPress])

    const timerButtonText = useMemo(() => {
        return isTimeExpired ? "Выслать код повторно" : `Повторить через ${TIMER_DURATION - timeLeft}`
    }, [timeLeft, isTimeExpired])

    const buttonList: TKeyboardButton[][] = useMemo(() => {
        return [
            [{ value: "1" }, { value: "2" }, { value: "3" }],
            [{ value: "4" }, { value: "5" }, { value: "6" }],
            [{ value: "7" }, { value: "8" }, { value: "9" }],
            [
                { value: timerButtonText, type: "timer", isEnabled: isTimeExpired }, 
                { value: "0" }, 
                { type: "delete" }
            ]
        ]
    }, [timerButtonText, isTimeExpired])

    if (isLoading) {
        return (
            <FullscreenLoader />
        )
    }

    return (
        <Wrapper>
            <Otp 
                otpCode={enteredOtpCode}
                otpLen={otpCode.length}
                isOtpValid={isOtpValid}
                errorMessage={errorMessage}
            />
            <Keyboard
                buttonList={buttonList}
                isShowing={true}
                onKeyPress={onKeyPress}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`