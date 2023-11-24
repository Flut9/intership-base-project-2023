import { TKeyboardButton, TKeyboardButtonType, TKeyboardPress } from "@shared/types"
import { styled } from "@shared/ui/theme"
import { useCallback } from "react"
import { Typography } from "../typography"
import { IconDelete } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"

type Props = TKeyboardButton & {
    onKeyPress: TKeyboardPress
}

export const KeyboardButton = ({ value, type = "default", isEnabled = true, onKeyPress }: Props) => {
    const theme = useTheme()

    const onPress = useCallback(() => {
        onKeyPress({ value, type })
    }, [onKeyPress, value, type])

    return (
        <Wrapper onPress={onPress} disabled={!isEnabled}>
            {type === "delete" && (
                <StyledIconDelete size={24} color={theme.palette.text.primary} />
            )}
            {(type === "default" || type === "cancel" || type === "timer") && (
                <ButtonText 
                    isButtonEnabled={isEnabled} 
                    variant={type === "default" ? "keyboardButton" : "caption1"} 
                    align="center"
                >
                    {value}
                </ButtonText>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    flex: 1;
    height: 68px;
    justify-content: center;
    align-items: center;
    padding: 16px;
`

const ButtonText = styled(Typography)<{ isButtonEnabled: boolean }>`
    color: ${({ theme, isButtonEnabled }) => isButtonEnabled ? theme.palette.text.primary : theme.palette.text.secondary};
`

const StyledIconDelete = styled(IconDelete)``