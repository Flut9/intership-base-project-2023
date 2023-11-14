import { styled } from "@shared/ui/theme"
import { IconLogoMedium } from "@shared/ui/icons"
import { PhoneInput } from "@entities/phone-input"
import { PrimaryButton } from "@shared/ui/molecules"

type Props = {
    phonenumber: string,
    isPhoneValid: boolean,
    onChangePhone: (phonenumber: string) => void,
    onLoginButtonClick: () => void  
}

export const PhoneAuth = ({
    phonenumber,
    isPhoneValid,
    onChangePhone,
    onLoginButtonClick
}: Props) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Icon />
                <StyledPhoneInput 
                    phonenumber={phonenumber}
                    isShowingLoader={false}
                    isValid={isPhoneValid}
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

const CloseButton = styled.Pressable``