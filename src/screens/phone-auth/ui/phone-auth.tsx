import { styled } from "@shared/ui/theme"
import { IconLogoMedium } from "@shared/ui/icons"
import { PhoneInput } from "@entities/phone-input"
import { PrimaryButton } from "@shared/ui/molecules"

type Props = {
    phonenumber: string,
    isPhoneValid: boolean,
    isFocused: boolean,
    isLoading: boolean,
    onChangePhone: (phonenumber: string) => void,
    onFocusChange: (isFocused: boolean) => void,
    onLoginButtonClick: () => void
}

export const PhoneAuth = ({
    phonenumber,
    isPhoneValid,
    isFocused,
    isLoading,
    onChangePhone,
    onFocusChange,
    onLoginButtonClick
}: Props) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Icon />
                <StyledPhoneInput
                    phonenumber={phonenumber}
                    isShowingLoader={isLoading}
                    isValid={isPhoneValid}
                    isFocused={isFocused}
                    onFocusChange={onFocusChange}
                    onPhoneChange={onChangePhone}
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