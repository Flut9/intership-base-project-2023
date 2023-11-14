import { styled } from "@shared/ui/theme"
import { PhoneAuthScreenProps } from "../types"
import { PhoneAuthConnector } from "@screens/phone-auth"
import { useCallback } from "react"

export const PhoneAuthScreen = ({ navigation, route }: PhoneAuthScreenProps) => {
    const onGetOtpError = useCallback(() => {
        navigation.navigate("AuthStatus", {
            isSucceeded: false
        })
    }, [navigation])

    return (
        <Wrapper>
            <PhoneAuthConnector 
                onGetOtpError={onGetOtpError}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`