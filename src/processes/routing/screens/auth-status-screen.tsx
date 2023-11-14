import { AuthStatusConnector } from "@screens/auth-status"
import { styled } from "@shared/ui/theme"
import { useCallback } from "react"
import { AuthStatusScreenProps } from "../types"

export const AuthStatusScreen = ({ navigation, route }: AuthStatusScreenProps) => {
    const { isSucceeded, type } = route.params

    const onCloseButtonClick = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const onButtonClick = useCallback(() => {
        switch (type) {
            case "phoneAuthStatus":
                navigation.navigate("PhoneAuth")
                break
            case "otpStatus":
                navigation.navigate("Otp")
                break
        }
    }, [navigation, type])

    return (
        <Wrapper>
            <AuthStatusConnector
                isSucceeded={isSucceeded}
                onCloseButtonClick={onCloseButtonClick}
                onButtonClick={onButtonClick}
            />
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`