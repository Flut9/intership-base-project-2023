import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { styled } from '@shared/ui/theme'

import { PaymentsScreen, PaymentStatusScreen } from '@processes/routing/screens'
import { CreatePaymentScreen } from '@processes/routing/screens'
import { PaymentServicesScreen } from '@processes/routing/screens'
import { PaymentsStackParams } from '@processes/routing/types'
import { PaymentsNavigationProps } from '@processes/routing/types'

import { useTheme } from '@shared/hooks'
import { BackButton } from '@shared/ui/atoms'

const PaymentsStack = createNativeStackNavigator<PaymentsStackParams>()

export const PaymentsNavigator = ({
  navigation,
  route,
}: PaymentsNavigationProps) => {
  const theme = useTheme()

  useLayoutEffect(() => {
    const routesWithoutTabbar = ['PaymentServices', 'CreatePayment', "PaymentStatus"]
    const focusedRouteName = getFocusedRouteNameFromRoute(route)

    if (!focusedRouteName) {
      return
    }

    const isRouteWithoutTabbar = routesWithoutTabbar.includes(focusedRouteName)
    navigation.setOptions({
      tabBarStyle: {
        display: isRouteWithoutTabbar ? 'none' : 'flex',
        backgroundColor: theme.palette.background.primary,
        borderTopWidth: 0,
      },
    })
  }, [navigation, route, getFocusedRouteNameFromRoute, theme])

  return (
    <Wrapper>
      <PaymentsStack.Navigator
        screenOptions={{
          headerTintColor: theme.palette.accent.tertiary,
          headerStyle: {
            backgroundColor: theme.palette.background.primary,
          },
        }}
      >
        <PaymentsStack.Screen
          component={PaymentsScreen}
          name="Payments"
          options={{
            title: 'Платежи',
            headerLargeTitle: true,
          }}
        />

        <PaymentsStack.Screen
          component={PaymentServicesScreen}
          name="PaymentServices"
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />

        <PaymentsStack.Screen
          component={CreatePaymentScreen}
          name="CreatePayment"
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />

        <PaymentsStack.Screen
          component={PaymentStatusScreen}
          name="PaymentStatus"
          options={{
            headerShown: false
          }}
        />
      </PaymentsStack.Navigator>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
`
