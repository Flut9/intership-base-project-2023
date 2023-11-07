import { useCallback, useEffect } from "react"
import { PaymentServicesConnector } from "@screens/payment-services"
import { PaymentServicesScreenProps } from "@processes/routing/types"
import { BackButton } from "@shared/ui/atoms"
import { PaymentServiceAPI } from "@shared/api/payment-categories"
import styled from "styled-components/native"

export const PaymentServicesScreen = ({ navigation, route }: PaymentServicesScreenProps) => {
    const { category } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: category.category_name
        })
    }, [navigation, category])

    const onServiceClick = useCallback((selectedService: PaymentServiceAPI) => {
        navigation.navigate("CreatePayment", {
            selectedService
        })
    }, [navigation])

    return (
        <Wrapper>
            <PaymentServicesConnector
                onServiceClick={onServiceClick} 
                services={category.services}
            />
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`