import { useCallback, useEffect } from 'react'

import { PaymentServicesScreenProps } from '@processes/routing/types'

import { PaymentServicesConnector } from '@screens/payment-services'

import { PaymentServiceAPI } from '@shared/api/payment-categories'
import { styled } from '@shared/ui/theme'

export const PaymentServicesScreen = ({
  navigation,
  route,
}: PaymentServicesScreenProps) => {
  const { categoryId, categoryName } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: categoryName,
    })
  }, [navigation, categoryName])

  const onServiceClick = useCallback(
    (selectedService: PaymentServiceAPI) => {
      navigation.navigate('CreatePayment', {
        selectedService,
      })
    },
    [navigation],
  )

  return (
    <Wrapper>
      <PaymentServicesConnector
        onServiceClick={onServiceClick}
        categoryId={categoryId}
      />
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
