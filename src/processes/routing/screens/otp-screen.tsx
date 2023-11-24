import { OtpConnector } from "@screens/otp"
import { OtpScreenProps } from "../types"
import { useCallback } from "react"

export const OtpScreen = ({ navigation, route }: OtpScreenProps) => {
    const onExitButtonClick = useCallback(() => {
        navigation.navigate("PhoneAuth")
    }, [navigation])

    const onConfirmAuthSuccess = useCallback(() => {
        navigation.navigate("PasswordAuth")
    }, [navigation])

    const onConfirmAuthError = useCallback(() => {
        navigation.navigate("AuthStatus", {
            isSucceeded: false
        })
    }, [navigation])

    return (
        <OtpConnector
            onExitButtonClick={onExitButtonClick}
            onConfirmAuthSuccess={onConfirmAuthSuccess}
            onConfirmAuthError={onConfirmAuthError}
        />
    )
}