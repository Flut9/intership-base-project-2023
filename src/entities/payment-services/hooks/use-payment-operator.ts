import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { addSnack } from '@entities/snack'

import { PaymentOperatorAPI } from '@shared/api/payment-services'
import { getPaymentOperator } from '@shared/api/payment-services/model'

export const usePaymentOperator = (serviceId: number) => {
  const { data, error, isError, isLoading } = useQuery<
    any,
    any,
    PaymentOperatorAPI
  >({
    queryKey: ['paymentOperator', serviceId],
    queryFn: () => getPaymentOperator(serviceId),
  })

  useEffect(() => {
    if (!error || !isError) {
      return
    }

    addSnack({
      message: 'Что-то пошло не так',
      durationToHide: 3000,
    })
  }, [error, isError])

  return {
    paymentOperator: data,
    isLoading,
  }
}
