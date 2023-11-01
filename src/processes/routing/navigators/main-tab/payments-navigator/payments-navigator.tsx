import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaymentsScreen } from "../../../screens"
import { useTheme } from "@shared/hooks"
import styled from "styled-components/native"

const PaymentsStack = createNativeStackNavigator()

export const PaymentsNavigator = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <PaymentsStack.Navigator>
                <PaymentsStack.Screen
                    component={PaymentsScreen}
                    name="Payments"
                    options={{
                        title: "Платежи",
                        headerLargeTitle: true,
                        headerTintColor: theme.palette.accent.tertiary,
                        headerStyle: {
                            backgroundColor: theme.palette.background.primary
                        }
                    }}
                />
            </PaymentsStack.Navigator>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
`