import { useCallback, useMemo } from 'react'

import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

type Props = {
  amount: number
  isValid: boolean
  onAmountChange: (amount: number) => void
}

export const AmountInput = ({ amount, isValid, onAmountChange }: Props) => {
  const amountStr = useMemo(() => {
    return `${amount} ₽`
  }, [amount])

  const handleAmountChange = useCallback(
    (amountStr: string) => {
      onAmountChange(Number(amountStr.replace(/[^0-9.,]/g, '')))
    },
    [onAmountChange],
  )

  return (
    <Wrapper>
      <Title variant="body15Semibold">Сумма</Title>
      <Input
        value={amountStr}
        isValid={isValid}
        keyboardType="numeric"
        onChangeText={handleAmountChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View``

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`

const Input = styled.TextInput<{ isValid: boolean }>`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.accent.tertiary};
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isValid, theme }) =>
    isValid ? theme.palette.content.secondary : theme.palette.indicator.error};
  padding-bottom: 14px;
`
