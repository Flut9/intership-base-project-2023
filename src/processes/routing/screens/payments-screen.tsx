import { useCallback } from "react"
import { PaymentsConnector } from "../../../screens/payments"
import { PaymentsScreenProps } from "../types"
import { PaymentCategoryAPI } from "@shared/api/payment-categories"

import styled from "styled-components/native"

export const PaymentsScreen = ({ navigation, route }: PaymentsScreenProps) => {
    const onCategoryClick = useCallback((paymentCategory: PaymentCategoryAPI) => {
        navigation.navigate("PaymentServices", {
            category: paymentCategory
        })
    }, [])

    return (
        <Wrapper>
            <PaymentsConnector onCategoryClick={onCategoryClick} />
        </Wrapper>        
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`