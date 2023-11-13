import { useCallback, useMemo, useState } from 'react'
import { Alert, Platform } from 'react-native'

import { PaymentPhoneInput } from '@entities/payment-phone-input'
import { useFormatPhoneNumber } from '@entities/payment-phone-input'

import { AmountInput } from '@entities/amout-input'
import { CardStub } from '@entities/card-stub'
import { ChipsList } from '@entities/chips-list'
import { addSnack } from '@entities/snack'

import { PaymentServiceUI } from '@shared/api/payment-categories'
import { Typography } from '@shared/ui/atoms'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'

import { validate } from '../lib'
import { ValidFieldsType } from '../lib'

type Props = {
  selectedService: PaymentServiceUI
  cashbackPercentage: number
  onContinue: (amount: number) => void
}

export const CreatePayment = ({
  selectedService,
  cashbackPercentage,
  onContinue,
}: Props) => {
  const { formattedPhonenumber, setPhonenumber } = useFormatPhoneNumber('')
  const [amount, setAmount] = useState(0)
  const [validation, setValidation] = useState<ValidFieldsType>({
    isAmountValid: true,
    isPhoneValid: true,
  })

  const onPhoneChange = useCallback(
    (phonenumber: string) => {
      setPhonenumber(phonenumber)
    },
    [setPhonenumber],
  )

  const onContinueButtonClick = useCallback(() => {
    const validation = validate(amount, formattedPhonenumber)
    setValidation(validation)

    if (validation.isAmountValid && validation.isPhoneValid) {
      onContinue(amount)
    }

    if (!validation.isPhoneValid) {
      addSnack({
        message: 'Некорректно введен номер телефона',
        durationToHide: 3000,
      })
    }

    if (!validation.isAmountValid) {
      addSnack({
        message: 'Некорректная сумма',
        durationToHide: 3000,
      })
    }
  }, [amount, formattedPhonenumber, setValidation, validate, onContinue])

  const onAmountChange = useCallback(
    (amount: number) => {
      setAmount(amount)
    },
    [setAmount],
  )

  const onChipClick = useCallback(
    (chipValue: number) => {
      setAmount(chipValue)
    },
    [setAmount],
  )

  const cashbackStr = useMemo(() => {
    return `Ваш кешбек составит ${cashbackPercentage}% - ${
      amount * (cashbackPercentage / 100)
    }`
  }, [amount, cashbackPercentage])

  return (
    <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <FormWrapper>
          <CardStub />

          <PaymentPhoneInputWrapper>
            <PaymentPhoneInput
              isValid={validation.isPhoneValid}
              phonenumber={formattedPhonenumber}
              onPhoneChange={onPhoneChange}
              iconUri={selectedService.icon}
            />
          </PaymentPhoneInputWrapper>

          <AmountWrapper>
            <AmountInputWrapper>
              <AmountInput
                amount={amount}
                isValid={validation.isAmountValid}
                onAmountChange={onAmountChange}
              />
            </AmountInputWrapper>
            {!amount ? (
              <ChipsList
                values={[100, 500, 2500, 5000, 10000, 20000]}
                onChipClick={onChipClick}
              />
            ) : (
              <CashbackWrapper>
                <CashbackText variant="caption1">{cashbackStr}</CashbackText>
              </CashbackWrapper>
            )}
          </AmountWrapper>
        </FormWrapper>

        <ButtonWrapper>
          <PrimaryButton onPress={onContinueButtonClick}>
            Продолжить
          </PrimaryButton>
        </ButtonWrapper>
      </ScrollView>
    </Wrapper>
  )
}

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`

const ScrollView = styled.ScrollView`
  flex: 1;
`

const FormWrapper = styled.View``

const PaymentPhoneInputWrapper = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  margin-top: 16px;
`

const AmountWrapper = styled.View`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding-bottom: 16px;
`

const AmountInputWrapper = styled.View`
  padding: 16px;
`

const CashbackWrapper = styled.View`
  flex: 1;
  padding: 0 16px;
`

const CashbackText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`

const ButtonWrapper = styled.View`
  padding: 16px;
`
