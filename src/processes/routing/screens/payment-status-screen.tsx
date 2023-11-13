import { useCallback } from 'react'

import { PaymentStatusConnector } from '@screens/payment-status'

import { styled } from '@shared/ui/theme'

import { PaymentStatusScreenProps } from '../types'

export const PaymentStatusScreen = ({
  navigation,
  route,
}: PaymentStatusScreenProps) => {
  const { amount, isSucceeded } = route.params

  const onDone = useCallback(() => {
    navigation.navigate('Payments')
  }, [navigation])

  return (
    <Wrapper>
      <PaymentStatusConnector
        amount={amount}
        isSucceeded={isSucceeded}
        onDoneButtonClick={onDone}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
