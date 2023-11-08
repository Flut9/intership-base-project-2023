import { useEffect } from 'react'
import { $lastRefreshDate, fetchPaymentCategoriesFx } from '@entities/payments/model/store'
import { $paymentCategories } from '@entities/payments/model'
import { useStore } from 'effector-react'
import { changeSnackMessage, changeSnackShowing } from '@app/snack'

const MS_IN_DAY = 86400000

export const usePaymentsCategories = () => {
  const paymentCategories = useStore($paymentCategories)
  const isLoading = useStore(fetchPaymentCategoriesFx.pending)
  const lastRefreshDate = useStore($lastRefreshDate)

  useEffect(() => {
    if (!(Date.now() - lastRefreshDate >= MS_IN_DAY)) {
      return
    }

    fetchPaymentCategoriesFx()
      .catch(e => {
        changeSnackMessage(e.message)
        changeSnackShowing(true)
      })
  }, [])

  return { paymentCategories, isLoading }
}
