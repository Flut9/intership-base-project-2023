import { styled } from "@shared/ui/theme"
import { IconClose, IconLogoSmall } from "@shared/ui/icons"
import { PasswordInput } from "@entities/password-input"
import { Typography } from "@shared/ui/atoms"
import { PrimaryButton } from "@shared/ui/molecules"
import { useTheme } from "@shared/hooks"
import { Platform } from "react-native"

type Props = {
    password: string,
    onPasswordChange: (password: string) => void,
    onCloseButtonClick: () => void,
    onLoginButtonClick: () => void
}

export const PasswordAuth = ({ password, onPasswordChange, onCloseButtonClick, onLoginButtonClick }: Props) => {
    const theme = useTheme()

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <SafeAreaView>
                <Wrapper>
                    <IconLogoWrapper>
                        <IconLogoSmall />
                    </IconLogoWrapper>

                    <PasswordInputWrapper>
                        <TitleText variant="body15Regular">Введите пароль</TitleText>
                        <PasswordInput 
                            password={password}
                            onPasswordChange={onPasswordChange}
                        />
                    </PasswordInputWrapper>    

                    <LoginButton onPress={onLoginButtonClick}>Войти</LoginButton>

                    <CloseButton onPress={onCloseButtonClick}>
                        <StyledIconClose size={24} color={theme.palette.button.secondary}/>
                    </CloseButton>
                </Wrapper>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const Wrapper = styled.View`
    flex: 1;
    padding: 16px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`

const IconLogoWrapper = styled.View`
    align-items: center;
`

const PasswordInputWrapper = styled.View`
    align-items: center;
`

const TitleText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 22px;
`

const LoginButton = styled(PrimaryButton)``

const CloseButton = styled.Pressable`
    position: absolute;
    top: 0;
    left: 16px;
`

const StyledIconClose = styled(IconClose)``