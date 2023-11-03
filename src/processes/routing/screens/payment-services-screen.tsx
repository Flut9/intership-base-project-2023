import { useCallback, useEffect } from "react"
import { PaymentServicesConnector } from "../../../screens/payment-services"
import { PaymentServicesScreenProps } from "../types"
import styled from "styled-components/native"
import { BackButton } from "@shared/ui/atoms"
import { PaymentServiceAPI } from "@shared/api/payment-categories"

export const PaymentServicesScreen = ({ navigation, route }: PaymentServicesScreenProps) => {
    const { category } = route.params

    const setupNavBar = useCallback(() => {
        navigation.setOptions({
            title: category.category_name,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />
        })
    }, [navigation, category])

    useEffect(() => {
        setupNavBar()
    }, [setupNavBar])

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