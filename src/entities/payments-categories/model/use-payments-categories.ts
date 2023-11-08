import { useEffect } from 'react'
import { fetchPaymentCategoriesFx } from '@entities/payments/model/store'
import { $paymentCategories } from '@entities/payments/model'
import { useStore } from 'effector-react'
import { changeSnackMessage, changeSnackShowing } from '@app/snack'

export const usePaymentsCategories = () => {
  const paymentCategories = useStore($paymentCategories)
  const isLoading = useStore(fetchPaymentCategoriesFx.pending)

  useEffect(() => {
    fetchPaymentCategoriesFx().catch(e => {
      changeSnackMessage(e.message)
      changeSnackShowing(true)
    })
  }, [])

  return { paymentCategories, isLoading }
}
