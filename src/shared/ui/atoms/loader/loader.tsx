import { Animated, Easing } from "react-native"
import { styled } from "@shared/ui/theme"
import { useCallback, useEffect, useMemo } from "react"
import { IconLoader } from "@shared/ui/icons"

type Props = {
    color?: string 
}

export const Loader = ({ color }: Props) => {
    const spinValue = useMemo(() => new Animated.Value(0), [])

    const spin = useCallback(() => {
        spinValue.setValue(0)
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => spin())
    }, [spinValue])

    const rotate = useMemo(() => spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    }), [spinValue])

    useEffect(() => {
        spin()
    }, [])

    return (
        <AnimatedWrapper style={{ transform: [{rotate}] }}>
            <StyledIconLoader color={color} />
        </AnimatedWrapper>
    )
}

const AnimatedWrapper = styled(Animated.View)``

const StyledIconLoader = styled(IconLoader)``