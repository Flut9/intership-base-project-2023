import { styled } from "@shared/ui/theme"
import { IconLogoMedium } from "@shared/ui/icons"
import { PhoneInput } from "@entities/phone-input"
import { PrimaryButton } from "@shared/ui/molecules"
import { useFormatPhoneNumber } from "@entities/payment-phone-input"
import { useCallback, useState } from "react"
import { validatePhone } from "@entities/payment-phone-input"
import { addSnack } from "@entities/snack"
import { useOtp } from "@features/otp"

export const PhoneAuth = () => {
    const [isPhoneValid, setPhoneValid] = useState(true)
    const {
        formattedPhonenumber, 
        setPhonenumber
    } = useFormatPhoneNumber("")
    const { 
        getOtpCode
    } = useOtp()

    const onLoginButtonClick = useCallback(() => {
        const isPhoneValid = validatePhone(formattedPhonenumber)
        setPhoneValid(isPhoneValid)

        if (!isPhoneValid) {
            addSnack({
                message: "Пожалуйста, убедитесь, что вы правильно ввели номер телефона",
                durationToHide: 3000
            })
        }

        getOtpCode(formattedPhonenumber)
    }, [validatePhone, addSnack, formattedPhonenumber, getOtpCode])

    return (
        <Wrapper>
            <ContentWrapper>
                <Icon />
                <StyledPhoneInput 
                    phonenumber={formattedPhonenumber}
                    isShowingLoader={false}
                    isValid={isPhoneValid}
                    onPhoneChange={setPhonenumber}
                />
            </ContentWrapper>

            <LoginButton onPress={onLoginButtonClick}>Войти</LoginButton>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 16px;
`

const ContentWrapper = styled.View`
    align-items: center;
`

const Icon = styled(IconLogoMedium)``

const StyledPhoneInput = styled(PhoneInput)``

const LoginButton = styled(PrimaryButton)``