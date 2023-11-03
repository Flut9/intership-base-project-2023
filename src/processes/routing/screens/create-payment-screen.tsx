import { useCallback, useEffect } from "react"
import { CreatePaymentConnector } from "@screens/create-payment"
import { BackButton } from "@shared/ui/atoms"
import { CreatePaymentScreenProps } from "@processes/routing/types"
import styled from "styled-components/native"

export const CreatePaymentScreen = ({ navigation, route }: CreatePaymentScreenProps) => {
    const { selectedService } = route.params

    const setupNavBar = useCallback(() => {
        navigation.setOptions({
            title: selectedService.service_name,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />
        })
    }, [navigation, selectedService])

    useEffect(() => {
        setupNavBar()
    }, [setupNavBar])

    return (
        <Wrapper>
            <CreatePaymentConnector selectedService={selectedService} />
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};
`