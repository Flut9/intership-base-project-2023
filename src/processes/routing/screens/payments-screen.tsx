import { useCallback } from 'react'
import styled from 'styled-components/native'

import { PaymentsScreenProps } from '@processes/routing/types'

import { PaymentsConnector } from '@screens/payments'

import { PaymentCategoryAPI } from '@shared/api/payment-categories'

export const PaymentsScreen = ({ navigation, route }: PaymentsScreenProps) => {
  const onCategoryClick = useCallback(
    (paymentCategory: PaymentCategoryAPI) => {
      navigation.navigate('PaymentServices', {
        category: paymentCategory,
      })
    },
    [navigation],
  )

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
