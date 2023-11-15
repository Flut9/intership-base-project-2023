import { Keyboard } from "@shared/ui/organisms"
import { PhoneAuth } from "./phone-auth"
import { styled } from "@shared/ui/theme"
import { useCallback, useEffect, useState } from "react"
import { TKeyboardButton } from "@shared/types"
import { addSnack } from "@entities/snack"
import { resetOtpData, setOtpCode, setOtpId, useOtp } from "@features/otp"
import { resetAuthPhone } from "@features/phone-auth"
import { resetGuestToken } from "@features/confirm-auth"
import { useAnimatePadding } from "@shared/hooks"
import { Animated } from "react-native"
import { usePhone } from "@features/phone-auth/model/use-phone"

type Props = {
    onGetOtpSuccess: () => void,
    onGetOtpError: () => void
}

export const PhoneAuthConnector = ({ onGetOtpSuccess, onGetOtpError }: Props) => {
    const { 
        phone,
        isPhoneValid,
        validatePhone,
        setPhone   
    } = usePhone("")
    const [isInputFocused, setInputFocused] = useState(false)
    const {
        getOtpCode,
        isLoading
    } = useOtp()
    const { padding } = useAnimatePadding(300, !isInputFocused)

    useEffect(() => {
        resetOtpData()
        resetGuestToken()
        resetAuthPhone()
    }, [])

    const onLoginButtonClick = useCallback(() => {
        const isValid = validatePhone()

        if (!isValid) {
            addSnack({
                message: "Пожалуйста, убедитесь, что вы правильно ввели номер телефона",
                durationToHide: 3000
            })
            return
        }

        getOtpCode({ phone: phone.replace(" ", "") }, {
            onSuccess: data => {
                setOtpId(data.otpId)
                setOtpCode(data.otpCode)
                onGetOtpSuccess()
            },
            onError: onGetOtpError
        })
    }, [validatePhone, addSnack, phone, getOtpCode, onGetOtpError, setOtpCode, setOtpId])

    const onKeyPress = useCallback((keyboardButton: TKeyboardButton) => {
        switch (keyboardButton.type) {
            case "default":
                setPhone(phone + keyboardButton.value)
                break
            case "delete":
                setPhone(phone.slice(0, -1))
                break
            case "cancel":
                setInputFocused(false)
                break
        }
    }, [phone, setPhone])  

    return (
        <Wrapper style={{ paddingBottom: padding }} isInputFocused={isInputFocused}>
            <PhoneAuthWrapper>
                <PhoneAuth 
                    phonenumber={phone}
                    isPhoneValid={isPhoneValid}
                    isFocused={isInputFocused}
                    isLoading={isLoading}
                    onFocusChange={setInputFocused}
                    onChangePhone={setPhone}
                    onLoginButtonClick={onLoginButtonClick}
                />
            </PhoneAuthWrapper>
            <Keyboard
                buttonList={[
                    [{ value: "1" }, { value: "2" }, { value: "3" }],
                    [{ value: "4" }, { value: "5" }, { value: "6" }],
                    [{ value: "7" }, { value: "8" }, { value: "9" }],
                    [{ value: "Отмена", type: "cancel" }, { value: "0" }, { type: "delete" }]
                ]}
                isShowing={isInputFocused}
                onKeyPress={onKeyPress}
            />
        </Wrapper>
    )
}

const Wrapper = styled(Animated.View)<{ isInputFocused: boolean }>`
    flex: 1;
    padding-bottom: ${({ isInputFocused }) => isInputFocused ? 300 : 0}px;
`

const PhoneAuthWrapper = styled.SafeAreaView`
    flex: 1;
`