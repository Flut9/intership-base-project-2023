import { useEffect } from 'react'
import { fetchPaymentCategoriesFx } from '@entities/payments/model/store'
import { $paymentCategories } from '@entities/payments/model'
import { useStore } from 'effector-react'

export const usePaymentsCategories = () => {
  const paymentCategories = useStore($paymentCategories)
  const isLoading = useStore(fetchPaymentCategoriesFx.pending)

  useEffect(() => {
    fetchPaymentCategoriesFx()
  }, [])

  return { paymentCategories, isLoading }
}
