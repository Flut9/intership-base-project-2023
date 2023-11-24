import { useMemo, useCallback, useEffect } from "react"
import { Animated, Easing } from "react-native"

export const useAnimatePadding = (toValue: number, isShowing: boolean) => {
    const paddingValue = useMemo(() => new Animated.Value(0), [])

    const paddingAnimation = useCallback(() => {
      Animated.timing(paddingValue, {
        toValue: isShowing ? 0 : 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }, [paddingValue, isShowing])

    const padding = useMemo(
      () =>
      paddingValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, toValue],
        }),
      [paddingValue, isShowing],
    )

    useEffect(() => {
        paddingAnimation()
    }, [isShowing])

    return { padding }
}