import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaymentsScreen } from "../../../screens"
import styled from "styled-components/native"

const Wrapper = styled.View`
    flex: 1;
`

const PaymentsStack = createNativeStackNavigator()

export const PaymentsNavigator = () => {
    return (
        <Wrapper>
            <PaymentsStack.Navigator>
                <PaymentsStack.Screen
                    component={PaymentsScreen}
                    name="Payments"
                />
            </PaymentsStack.Navigator>
        </Wrapper>
    )
}