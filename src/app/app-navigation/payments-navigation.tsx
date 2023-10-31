import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Payments } from "screens/payments"
import styled from "styled-components/native"

const Wrapper = styled.View``

export type PaymentsStackParams = {
    Payments: undefined
}

const PaymentsStack = createNativeStackNavigator()

export const PaymentsNavigation = () => {
    return (
        <Wrapper>
            <PaymentsStack.Navigator>
                <PaymentsStack.Screen
                    component={Payments}
                    name="Payments"
                />
            </PaymentsStack.Navigator>
        </Wrapper>
    )
}