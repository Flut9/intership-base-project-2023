import { SafeAreaView } from "react-native-safe-area-context"
import { PaymentsConnector } from "../../../screens/payments"
import { PaymentsScreenProps } from "../types"

import styled from "styled-components/native"

export const PaymentsScreen = ({ navigation, route }: PaymentsScreenProps) => {
    return (
        <Wrapper>
            <PaymentsConnector></PaymentsConnector>
        </Wrapper>        
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
`