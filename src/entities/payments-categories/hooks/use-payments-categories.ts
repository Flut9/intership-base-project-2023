import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { addSnack } from '@entities/snack'

import {
  PaymentCategoryAPI,
  getPaymentCategories,
} from '@shared/api/payment-categories'

const MS_IN_DAY = 86400000
const PAYMENT_CATEGORIES_KEY = 'paymentCategories'

export const usePaymentsCategories = () => {
  const { data, error, isError, isLoading } = useQuery<
    any,
    any,
    PaymentCategoryAPI[]
  >({
    queryKey: [PAYMENT_CATEGORIES_KEY],
    queryFn: () => getPaymentCategories(),
    staleTime: MS_IN_DAY,
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
    paymentCategories: data,
    isLoading,
  }
}
