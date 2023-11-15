import { OtpConnector } from "@screens/otp"
import { OtpScreenProps } from "../types"
import { styled } from "@shared/ui/theme"
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
            isSucceeded: false,
            type: "otpStatus"
        })
    }, [navigation])

    return (
        <Wrapper>
            <OtpConnector
                onExitButtonClick={onExitButtonClick}
                onConfirmAuthSuccess={onConfirmAuthSuccess}
                onConfirmAuthError={onConfirmAuthError}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`