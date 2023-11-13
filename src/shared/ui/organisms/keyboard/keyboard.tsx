import { styled } from "@shared/ui/theme"
import { TKeyboardButton, TKeyboardPress } from "@shared/types"
import { KeyboardButton } from "@shared/ui/atoms"
import { KeyboardRow } from "@shared/ui/atoms"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type Props = {
    buttonList: TKeyboardButton[][],
    onKeyPress: TKeyboardPress
}

export const Keyboard = ({ buttonList, onKeyPress }: Props) => {
    const { bottom } = useSafeAreaInsets()

    return (
        <Wrapper bottomPadding={bottom}>
            {buttonList.map((row, rowIndex) => {
                return (
                    <KeyboardRow key={rowIndex.toString()}>
                        {row.map((button, buttonIndex) => {
                            return (
                                <KeyboardButton 
                                    key={buttonIndex.toString()}
                                    value={button.value}
                                    type={button.type}
                                    onKeyPress={onKeyPress}
                                />
                            )
                        })}
                    </KeyboardRow>
                )
            })}  
        </Wrapper>
    )
}

const Wrapper = styled.View<{ bottomPadding: number }>`
    height: 300px;
    background-color: ${({ theme }) => theme.palette.background.primary};
    padding-bottom: ${({ bottomPadding }) => bottomPadding}px;
`