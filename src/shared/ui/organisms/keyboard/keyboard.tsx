import { styled } from "@shared/ui/theme"
import { TKeyboardButton, TKeyboardPress } from "@shared/types"
import { KeyboardButton } from "@shared/ui/atoms"
import { KeyboardRow } from "@shared/ui/atoms"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Animated } from "react-native"
import { useAnimateHeight } from "@shared/hooks"

type Props = {
    buttonList: TKeyboardButton[][],
    isShowing: boolean,
    onKeyPress: TKeyboardPress
}

export const Keyboard = ({ buttonList, isShowing, onKeyPress }: Props) => {
    const { bottom } = useSafeAreaInsets()
    const { height } = useAnimateHeight(-300, isShowing)

    return (
        <Wrapper style={{ bottom: height }} isShowing={isShowing} bottomPadding={bottom}>
            {buttonList.map((row, rowIndex) => {
                return (
                    <KeyboardRow key={rowIndex.toString()}>
                        {row.map((button, buttonIndex) => {
                            return (
                                <KeyboardButton 
                                    key={buttonIndex.toString()}
                                    value={button.value}
                                    type={button.type}
                                    isEnabled={button.isEnabled}
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

const Wrapper = styled(Animated.View)<{ 
    isShowing: boolean, 
    bottomPadding: number, 
}>`
    position: absolute;
    left: 0;
    right: 0;
    height: 300px;
    background-color: ${({ theme }) => theme.palette.background.primary};
    padding-bottom: ${({ bottomPadding }) => bottomPadding}px;
`