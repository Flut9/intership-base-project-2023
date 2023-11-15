import { Keyboard } from "@shared/ui/organisms"
import { PhoneAuth } from "./phone-auth"
import { styled } from "@shared/ui/theme"
import { useCallback, useEffect, useState } from "react"
import { TKeyboardButton } from "@shared/types"
import { useFormatPhoneNumber } from "@entities/payment-phone-input"
import { validatePhone } from "@entities/payment-phone-input"
import { addSnack } from "@entities/snack"
import { resetOtpData, setOtpCode, setOtpId, useOtp } from "@features/otp"
import { resetAuthPhone, setAuthPhone } from "@features/phone-auth"
import { resetGuestToken } from "@features/confirm-auth"

type Props = {
    onGetOtpSuccess: () => void,
    onGetOtpError: () => void
}

export const PhoneAuthConnector = ({ onGetOtpSuccess, onGetOtpError }: Props) => {
    const [isPhoneValid, setPhoneValid] = useState(true)
    const [isInputFocused, setInputFocused] = useState(false)
    const {
        formattedPhonenumber, 
        setPhonenumber
    } = useFormatPhoneNumber("")
    const {
        getOtpCode,
        isLoading
    } = useOtp()

    useEffect(() => {
        resetOtpData()
        resetGuestToken()
        resetAuthPhone()
    }, [])

    useEffect(() => {
        setAuthPhone(formattedPhonenumber)
    }, [formattedPhonenumber, setAuthPhone])

    const onLoginButtonClick = useCallback(() => {
        const isPhoneValid = validatePhone(formattedPhonenumber)
        setPhoneValid(isPhoneValid)

        if (!isPhoneValid) {
            addSnack({
                message: "Пожалуйста, убедитесь, что вы правильно ввели номер телефона",
                durationToHide: 3000
            })
            return
        }

        getOtpCode({ phone: formattedPhonenumber.replace(" ", "") }, {
            onSuccess: data => {
                setOtpId(data.otpId)
                setOtpCode(data.otpCode)
                onGetOtpSuccess()
            },
            onError: onGetOtpError
        })
    }, [validatePhone, addSnack, formattedPhonenumber, getOtpCode, onGetOtpError, setOtpCode, setOtpId])

    const onKeyPress = useCallback((keyboardButton: TKeyboardButton) => {
        switch (keyboardButton.type) {
            case "default":
                setPhonenumber(formattedPhonenumber + keyboardButton.value)
                break
            case "delete":
                setPhonenumber(formattedPhonenumber.slice(0, -1))
                break
            case "cancel":
                setInputFocused(false)
                break
        }
    }, [setPhonenumber, formattedPhonenumber])  

    return (
        <Wrapper isInputFocused={isInputFocused}>
            <PhoneAuthWrapper>
                <PhoneAuth 
                    phonenumber={formattedPhonenumber}
                    isPhoneValid={isPhoneValid}
                    isFocused={isInputFocused}
                    isLoading={isLoading}
                    onFocusChange={setInputFocused}
                    onChangePhone={setPhonenumber}
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

const Wrapper = styled.View<{ isInputFocused: boolean }>`
    flex: 1;
    padding-bottom: ${({ isInputFocused }) => isInputFocused ? 300 : 0}px;
`

const PhoneAuthWrapper = styled.SafeAreaView`
    flex: 1;
`