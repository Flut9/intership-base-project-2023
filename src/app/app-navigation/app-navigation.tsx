import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import {
  IconMainProduct,
  IconPayment,
  IconUser,
  IconBank
} from '@shared/ui/icons'
import { Home } from 'screens/home/'
import { ATMs } from 'screens/atms'
import { Profile } from 'screens/profile'
import { PaymentsNavigation } from './payments-navigation'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`

export type TabsStackParams = {
  Home: undefined,
  Payments: undefined,
  ATMs: undefined,
  Profile: undefined
}

const Tabs = createBottomTabNavigator()

export const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Tabs.Navigator 
      screenOptions={{
        tabBarActiveTintColor: theme.palette.accent.secondary,
        tabBarInactiveTintColor: theme.palette.text.secondary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.palette.background.primary,
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          fontSize: 11
        }
      }}
    >
      <Tabs.Screen
        component={Home}
        name="Home"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => <IconMainProduct color={color} />
        }}
      />

      <Tabs.Screen 
        component={PaymentsNavigation}
        name="Payments"
        options={{
          title: "Платежи",
          tabBarIcon: ({ color }) => <IconPayment color={color} />
        }}
      />

      <Tabs.Screen 
        component={ATMs}
        name="ATMs"
        options={{
          title: "Банкоматы",
          tabBarIcon: ({ color }) => <IconBank color={color} />
        }}
      />

      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color }) => <IconUser color={color} />
        }}
      />
    </Tabs.Navigator>
  )
}
