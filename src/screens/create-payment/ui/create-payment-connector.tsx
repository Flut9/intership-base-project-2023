import { useCallback, useMemo } from 'react'

import { useUpdateHistory } from '@features/create-payment'

import { usePaymentOperator } from '@entities/payment-services'
import { addSnack } from '@entities/snack'

import {
  PaymentServiceAPI,
  mapPaymentServiceToUI,
} from '@shared/api/payment-categories'

import { CreatePayment } from './create-payment'

type Props = {
  selectedService: PaymentServiceAPI
  onPaymentCreated: (amount: number, isSucceeded: boolean) => void
}

export const CreatePaymentConnector = ({
  selectedService,
  onPaymentCreated,
}: Props) => {
  const { paymentOperator, isLoading } = usePaymentOperator(
    parseInt(selectedService.service_id),
  )

  const { updateHistory } = useUpdateHistory()

  const selectedServiceUI = useMemo(
    () => mapPaymentServiceToUI(selectedService),
    [selectedService],
  )

  const onContinue = useCallback(
    (amount: number) => {
      updateHistory(
        {
          card_id: 123,
          service_id: selectedService.service_id,
          size: amount,
          size_cashback: paymentOperator?.cashback_percentage,
          period_from: '',
          period_to: '',
        },
        {
          onSuccess: (data) => {
            onPaymentCreated(amount, data.success)
          },
          onError: (_) => {
            addSnack({
              message: 'Что-то пошло не так',
              durationToHide: 3000,
            })
          },
        },
      )
    },
    [selectedService, paymentOperator, addSnack, onPaymentCreated],
  )

  return (
    <CreatePayment
      selectedService={selectedServiceUI}
      cashbackPercentage={paymentOperator?.cashback_percentage ?? 0}
      onContinue={onContinue}
    />
  )
}
