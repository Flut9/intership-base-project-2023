import { PasswordAuthConnector } from "@screens/password-auth"
import { styled } from "@shared/ui/theme"
import { useCallback } from "react"
import { Platform } from "react-native"
import { PasswordAuthScreenProps } from "../types"

export const PasswordAuthScreen = ({ navigation, route }: PasswordAuthScreenProps) => {
    const onExitButtonClick = useCallback(() => {
        navigation.navigate("PhoneAuth")
    }, [navigation])

    const onLoginSucceeded = useCallback(() => {
        navigation.navigate("AuthStatus", {
            isSucceeded: true
        })
    }, [])

    const onLoginFailed = useCallback(() => {
        navigation.navigate("AuthStatus", {
            isSucceeded: false
        })
    }, [navigation])

    return (
        <Wrapper>
            <KeyboardAvoidingWrapper 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            >
                <PasswordAuthConnector 
                    onExitButtonClick={onExitButtonClick}
                    onLoginSucceeded={onLoginSucceeded}
                    onLoginFailed={onLoginFailed}
                />
            </KeyboardAvoidingWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const KeyboardAvoidingWrapper = styled.KeyboardAvoidingView`
    flex: 1;
`