import { useMemo } from 'react'

import {
  PaymentServiceAPI,
  mapPaymentServiceToUI,
} from '@shared/api/payment-categories'

import { CreatePayment } from './create-payment'
import { usePaymentOperator } from '@entities/payment-services'
import { mapPaymentOperatorToUI } from '@shared/api/payment-services'

type Props = {
  selectedService: PaymentServiceAPI
}

export const CreatePaymentConnector = ({ selectedService }: Props) => {
  const {
    paymentOperator,
    isLoading
  } = usePaymentOperator(parseInt(selectedService.service_id))

  const selectedServiceUI = useMemo(
    () => mapPaymentServiceToUI(selectedService),
    [selectedService],
  )

  return (
    <CreatePayment 
      selectedService={selectedServiceUI} 
      cashbackPercentage={paymentOperator?.cashback_percentage ?? 0}
    />
  )
}
