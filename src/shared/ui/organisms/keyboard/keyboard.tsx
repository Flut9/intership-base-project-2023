import { styled } from "@shared/ui/theme"
import { TKeyboardButton, TKeyboardPress } from "@shared/types"
import { KeyboardButton } from "@shared/ui/atoms"
import { KeyboardRow } from "@shared/ui/atoms"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Animated, Easing } from "react-native"
import { useCallback, useEffect, useMemo } from "react"

type Props = {
    buttonList: TKeyboardButton[][],
    isShowing: boolean,
    onKeyPress: TKeyboardPress
}

export const Keyboard = ({ buttonList, isShowing, onKeyPress }: Props) => {
    const { bottom } = useSafeAreaInsets()

    const heightValue = useMemo(() => new Animated.Value(0), [])

    const height = useCallback(() => {
      Animated.timing(heightValue, {
        toValue: isShowing ? 0 : 1,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }, [heightValue, isShowing])
  
    const heightProp = useMemo(
      () =>
        heightValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -300],
        }),
      [heightValue, isShowing],
    )
  
    useEffect(() => {
      height()
    }, [isShowing])

    return (
        <Wrapper style={{ bottom: heightProp }} isShowing={isShowing} bottomPadding={bottom}>
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