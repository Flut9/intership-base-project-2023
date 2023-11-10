import { useCallback, useEffect } from 'react'
import { $lastRefreshDate } from '@entities/payments/model/store'
import { $paymentCategories } from '@entities/payments/model'
import { useStore } from 'effector-react'
import { useQuery } from '@tanstack/react-query'
import { getPaymentCategories, PaymentCategoriesAPI, PaymentCategoryAPI } from '@shared/api/payment-categories'
import { addSnack } from '@entities/snack'
import axios from 'axios'

const MS_IN_DAY = 86400000
const PAYMENT_CATEGORIES_KEY = "paymentCategories"

export const usePaymentsCategories = () => {
  const lastRefreshDate = useStore($lastRefreshDate)

  const {
    data,
    error,
    isLoading
  } = useQuery<any, Error, PaymentCategoryAPI[]>({
    queryKey: [PAYMENT_CATEGORIES_KEY],
    queryFn: () => fetchPaymentCategories(),
  })

  useEffect(() => {
    addSnack({
      message: "Что-то пошло не так",
      durationToHide: 3000
    })
  }, [error, addSnack])

  const fetchPaymentCategories = useCallback(async () => {
    const options = {
      method: 'GET',
      url: 'https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/payment/list',
      headers: { Authorization: 'Bearer 123', Accept: 'application/json' },
    }

    return await axios.request(options)
  }, [getPaymentCategories, addSnack])

  return {
    paymentCategories: data,
    isLoading
  }

  // useEffect(() => {
    // if (!(Date.now() - lastRefreshDate >= MS_IN_DAY)) {
    //   return
    // }

    // fetchPaymentCategoriesFx()
  // }, [])
}
