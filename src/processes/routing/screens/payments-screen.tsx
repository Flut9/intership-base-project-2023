import { useCallback } from 'react'

import { PaymentsScreenProps } from '@processes/routing/types'

import { PaymentsConnector } from '@screens/payments'

import { PaymentCategoryAPI } from '@shared/api/payment-categories'
import { styled } from '@shared/ui/theme'

export const PaymentsScreen = ({ navigation, route }: PaymentsScreenProps) => {
  const onCategoryClick = useCallback(
    (categoryId: string, categoryName: string) => {
      navigation.navigate('PaymentServices', {
        categoryId,
        categoryName,
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
