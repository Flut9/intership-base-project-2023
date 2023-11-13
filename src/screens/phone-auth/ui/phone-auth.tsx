import { styled } from "@shared/ui/theme"
import { IconLogoMedium } from "@shared/ui/icons"
import { PhoneInput } from "@entities/phone-input"
import { PrimaryButton } from "@shared/ui/molecules"
import { useFormatPhoneNumber } from "@entities/payment-phone-input"

export const PhoneAuth = () => {
    const {
        formattedPhonenumber, 
        setPhonenumber
    } = useFormatPhoneNumber("")

    return (
        <Wrapper>
            <ContentWrapper>
                <Icon />
                <StyledPhoneInput 
                    phonenumber={formattedPhonenumber}
                    isShowingLoader={false}
                    onPhoneChange={setPhonenumber}
                />
            </ContentWrapper>

            <LoginButton>Войти</LoginButton>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 0 16px;
`

const ContentWrapper = styled.View`
    align-items: center;
`

const Icon = styled(IconLogoMedium)``

const StyledPhoneInput = styled(PhoneInput)``

const LoginButton = styled(PrimaryButton)``