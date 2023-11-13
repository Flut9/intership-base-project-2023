import { useCallback, useEffect } from 'react'

import { CreatePaymentScreenProps } from '@processes/routing/types'

import { CreatePaymentConnector } from '@screens/create-payment'

import { styled } from '@shared/ui/theme'

export const CreatePaymentScreen = ({
  navigation,
  route,
}: CreatePaymentScreenProps) => {
  const { selectedService } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: selectedService.service_name,
    })
  }, [navigation, selectedService])

  const onPaymentCreated = useCallback(
    (amount: number, isSucceeded: boolean) => {
      navigation.navigate('PaymentStatus', {
        amount,
        isSucceeded,
      })
    },
    [navigation],
  )

  return (
    <Wrapper>
      <CreatePaymentConnector
        selectedService={selectedService}
        onPaymentCreated={onPaymentCreated}
      />
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
