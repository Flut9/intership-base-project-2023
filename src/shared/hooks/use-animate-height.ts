import { useMemo, useCallback, useEffect } from "react"
import { Animated, Easing } from "react-native"

export const useAnimateHeight = (toValue: number, isShowing: boolean) => {
    const heightValue = useMemo(() => new Animated.Value(0), [])

    const heightAnimation = useCallback(() => {
      Animated.timing(heightValue, {
        toValue: isShowing ? 0 : 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start()
    }, [heightValue, isShowing])

    const height = useMemo(
      () =>
        heightValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, toValue],
        }),
      [heightValue, isShowing],
    )

    useEffect(() => {
        heightAnimation()
    }, [isShowing])

    return { height }
}