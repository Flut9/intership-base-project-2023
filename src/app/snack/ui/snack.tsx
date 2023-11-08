import { useTheme } from "@shared/hooks"
import { Typography } from "@shared/ui/atoms"
import { IconClose } from "@shared/ui/icons"
import { useStore } from "effector-react"
import { useCallback } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { $snackMessage, $snackShowing, changeSnackShowing } from "../model"

export const Snack = () => {
    const theme = useTheme()
    const safeAreaInsets = useSafeAreaInsets()
    const message = useStore($snackMessage)
    const isShowing = useStore($snackShowing)

    const onCloseButtonClick = useCallback(() => {
        changeSnackShowing(false)
    }, [changeSnackShowing])

    return (
        <Wrapper isShowing={isShowing} paddingTop={safeAreaInsets.top}>
            <MessageText variant="body15Regular">{message}</MessageText>
            <CloseButton onPress={onCloseButtonClick}>
                <IconClose color={theme.palette.button.secondary} size={16} />
            </CloseButton>
        </Wrapper>
    )
}

const Wrapper = styled.View<{ isShowing: boolean, paddingTop: number }>`
    height: 60px;
    flex-direction: row;
    display: ${({ isShowing }) => isShowing ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: ${({ paddingTop }) => paddingTop}px;
    left: 8px;
    right: 8px;
    padding: 0 16px;
    z-index: 10;
    background-color: #FB6176;
    border-radius: 20px;
`

const MessageText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
`

const CloseButton = styled.Pressable`
    margin-left: 20px;
`