import { useMemo } from 'react'

import {
  PaymentServiceAPI,
  mapPaymentServiceToUI,
} from '@shared/api/payment-categories'

import { CreatePayment } from './create-payment'

type Props = {
  selectedService: PaymentServiceAPI
}

export const CreatePaymentConnector = ({ selectedService }: Props) => {
  const selectedServiceUI = useMemo(
    () => mapPaymentServiceToUI(selectedService),
    [selectedService],
  )

  return <CreatePayment selectedService={selectedServiceUI} />
}
