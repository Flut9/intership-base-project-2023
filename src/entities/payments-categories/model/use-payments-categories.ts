import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPaymentCategories, PaymentCategoryAPI } from '@shared/api/payment-categories'
import { addSnack } from '@entities/snack'

const MS_IN_DAY = 86400000
const PAYMENT_CATEGORIES_KEY = "paymentCategories"

export const usePaymentsCategories = () => {
  const {
    data,
    error,
    isLoading
  } = useQuery<any, any, PaymentCategoryAPI[]>({
    queryKey: [PAYMENT_CATEGORIES_KEY],
    queryFn: () => getPaymentCategories(),
    staleTime: MS_IN_DAY
  })

  useEffect(() => {
    if (!error) {
      return
    }

    addSnack({
      message: "Что-то пошло не так",
      durationToHide: 3000
    })
  }, [error])

  return {
    paymentCategories: data,
    isLoading
  }
}
