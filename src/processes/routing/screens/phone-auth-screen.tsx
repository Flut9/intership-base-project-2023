import { styled } from "@shared/ui/theme"
import { PhoneAuthScreenProps } from "../types"
import { PhoneAuthConnector } from "@screens/phone-auth"
import { useCallback } from "react"

export const PhoneAuthScreen = ({ navigation, route }: PhoneAuthScreenProps) => {
    const onGetOtpSuccess = useCallback(() => {
        navigation.navigate("Otp")
    }, [navigation])

    const onGetOtpError = useCallback(() => {
        navigation.navigate("AuthStatus", {
            isSucceeded: false
        })
    }, [navigation])

    return (
        <PhoneAuthConnector 
            onGetOtpSuccess={onGetOtpSuccess}
            onGetOtpError={onGetOtpError}
        />
    )
}