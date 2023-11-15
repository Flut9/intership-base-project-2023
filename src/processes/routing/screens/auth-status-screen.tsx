import { AuthStatusConnector } from "@screens/auth-status"
import { styled } from "@shared/ui/theme"
import { useCallback } from "react"
import { AuthStatusScreenProps } from "../types"

export const AuthStatusScreen = ({ navigation, route }: AuthStatusScreenProps) => {
    const { isSucceeded } = route.params

    const onCloseButtonClick = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    return (
        <Wrapper>
            <AuthStatusConnector
                isSucceeded={isSucceeded}
                onCloseButtonClick={onCloseButtonClick}
            />
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`