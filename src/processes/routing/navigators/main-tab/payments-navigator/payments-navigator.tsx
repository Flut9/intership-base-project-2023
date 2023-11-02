import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import { PaymentsScreen } from "../../../screens"
import { useTheme } from "@shared/hooks"
import { PaymentServicesScreen } from "../../../screens"
import { PaymentsStackParams } from "@processes/routing/types"
import { PaymentsNavigationProps } from "@processes/routing/types"
import styled from "styled-components/native"
import { useLayoutEffect } from "react"

const PaymentsStack = createNativeStackNavigator<PaymentsStackParams>()

export const PaymentsNavigator = ({ navigation, route }: PaymentsNavigationProps) => {
    const theme = useTheme()

    useLayoutEffect(() => {
        const routesWithoutTabbar = ["PaymentServices"]
        const focusedRouteName = getFocusedRouteNameFromRoute(route)

        if (!focusedRouteName) {
            return
        }

        const isRouteWithoutTabbar = routesWithoutTabbar.includes(focusedRouteName)
        navigation.setOptions({
            tabBarStyle: {
                display: isRouteWithoutTabbar ? "none" : "flex",
                backgroundColor: theme.palette.background.primary,
                borderTopWidth: 0
            }
        })
    }, [navigation, route, getFocusedRouteNameFromRoute, theme])

    return (
        <Wrapper>
            <PaymentsStack.Navigator screenOptions={{
                headerTintColor: theme.palette.accent.tertiary,
                headerStyle: {
                    backgroundColor: theme.palette.background.primary
                }
            }}>
                <PaymentsStack.Screen
                    component={PaymentsScreen}
                    name="Payments"
                    options={{
                        title: "Платежи",
                        headerLargeTitle: true
                    }}
                />

                <PaymentsStack.Screen
                    component={PaymentServicesScreen}
                    name="PaymentServices"
                />
            </PaymentsStack.Navigator>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
`