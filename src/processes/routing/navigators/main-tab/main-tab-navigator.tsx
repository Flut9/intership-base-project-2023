import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    IconMainProduct,
    IconPayment,
    IconUser,
    IconBank
} from '@shared/ui/icons'
import { Home } from 'screens/home'
import { ATMs } from 'screens/atms'
import { Profile } from 'screens/profile'
import { PaymentsNavigator } from './payments-navigator'
import { useTheme } from '@shared/hooks'
import { MainTabStackParams } from '@processes/routing/types'
import styled from "styled-components/native"

const Wrapper = styled.View`
    flex: 1;
`

const MainTabStack = createBottomTabNavigator<MainTabStackParams>()

export const MainTabNavigator = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <MainTabStack.Navigator 
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
                <MainTabStack.Screen
                    component={Home}
                    name="Home"
                    options={{
                        title: "Главная",
                        tabBarIcon: ({ color }) => <IconMainProduct color={color} />
                    }}
                />

                <MainTabStack.Screen 
                    component={PaymentsNavigator}
                    name="PaymentsNavigation"
                    options={{
                        title: "Платежи",
                        tabBarIcon: ({ color }) => <IconPayment color={color} />
                    }}
                />

                <MainTabStack.Screen 
                    component={ATMs}
                    name="ATMs"
                    options={{
                        title: "Банкоматы",
                        tabBarIcon: ({ color }) => <IconBank color={color} />
                    }}
                />

                <MainTabStack.Screen
                    component={Profile}
                    name="Profile"
                    options={{
                        title: "Профиль",
                        tabBarIcon: ({ color }) => <IconUser color={color} />
                    }}
                />
            </MainTabStack.Navigator>
        </Wrapper>
    )
}