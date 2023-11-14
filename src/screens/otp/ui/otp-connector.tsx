import { mapOtpCodeToUI, OtpCodeAPI } from "@shared/api/otp"
import { styled } from "@shared/ui/theme"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Alert } from "react-native"
import { Otp } from "./otp"
import { FullscreenLoader, Keyboard } from "@shared/ui/organisms"
import { TKeyboardButton } from "@shared/types"
import { setGuestToken, useConfirmAuth } from "@features/confirm-auth"
import { useStore } from "effector-react"
import { $enteredOtpCode, $otpCode, $otpId, setEnteredOtpCode } from "@features/otp"
import { $authPhone } from "@features/phone-auth"

const TOTAL_ATTEMPTS_COUNT = 5

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
    const [isOtpValid, setOtpValid] = useState(true)
    const [attemptsCount, setAttemptsCount] = useState(0)
    const {
        confirmAuthData,
        postConfirmAuth,
        isLoading
    } = useConfirmAuth()

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
        if (enteredOtpCode === otpCode) {
            setOtpValid(true)
            checkAuthConfirmed(enteredOtpCode)
            return
        }

        const updatedAttemptsCount = attemptsCount + 1

        if (updatedAttemptsCount === 5) {
            Alert.alert(
                "Вы ввели неверно код 5 раз",
                "Данная сессия авторизации будет сброшена!",
                [{
                    text: "Выход",
                    onPress: onExitButtonClick
                }]
            )
        }

        setOtpValid(false)
        setAttemptsCount(updatedAttemptsCount)
    }, [setOtpValid, attemptsCount, setAttemptsCount, onExitButtonClick, checkAuthConfirmed, enteredOtpCode])

    const onKeyPress = useCallback((keyboardButton: TKeyboardButton) => {
        switch (keyboardButton.type) {
            case "default":
                const updatedOtpCode = enteredOtpCode + keyboardButton.value

                if (updatedOtpCode.length === otpCode.length) {
                    validateOtp(updatedOtpCode)
                    setEnteredOtpCode(updatedOtpCode)
                    break
                } 
                
                if (updatedOtpCode.length < otpCode.length) {
                    setEnteredOtpCode(updatedOtpCode)
                    break
                }

                break
            case "delete":
                setEnteredOtpCode(enteredOtpCode.slice(0, -1))
                break
            case "cancel":
                break
        }
    }, [enteredOtpCode, setEnteredOtpCode, validateOtp, otpCode])

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
                buttonList={[
                    [{ value: "1" }, { value: "2" }, { value: "3" }],
                    [{ value: "4" }, { value: "5" }, { value: "6" }],
                    [{ value: "7" }, { value: "8" }, { value: "9" }],
                    [{ value: "Отмена", type: "cancel" }, { value: "0" }, { type: "delete" }]
                ]}
                isShowing={true}
                onKeyPress={onKeyPress}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
`