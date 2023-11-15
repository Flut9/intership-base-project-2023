import { styled } from "@shared/ui/theme"
import { PhoneAuthScreenProps } from "../types"
import { PhoneAuthConnector } from "@screens/phone-auth"
import { useCallback } from "react"
import { OtpCodeAPI } from "@shared/api/otp"

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
        <Wrapper>
            <PhoneAuthConnector 
                onGetOtpSuccess={onGetOtpSuccess}
                onGetOtpError={onGetOtpError}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`