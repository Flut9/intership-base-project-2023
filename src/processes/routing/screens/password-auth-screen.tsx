import { PasswordAuthConnector } from "@screens/password-auth"
import { useCallback } from "react"
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
        <PasswordAuthConnector 
            onExitButtonClick={onExitButtonClick}
            onLoginSucceeded={onLoginSucceeded}
            onLoginFailed={onLoginFailed}
        />
    )
}