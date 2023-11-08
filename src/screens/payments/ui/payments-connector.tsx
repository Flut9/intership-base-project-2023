import { useCallback, useMemo } from 'react'

import { usePaymentsCategories } from '@entities/payments-categories'

import {
  PaymentCategoryAPI,
  mapPaymentCategoryToUI,
} from '@shared/api/payment-categories'

import { Payments } from './payments'
import { useStore } from 'effector-react'
import { fetchPaymentCategoriesFx } from '@entities/payments'

type Props = {
  onCategoryClick: (category: PaymentCategoryAPI) => void
}

export const PaymentsConnector = ({ onCategoryClick }: Props) => {
  const { paymentCategories, isLoading } = usePaymentsCategories()
  const refreshing = useStore(fetchPaymentCategoriesFx.pending)

  const paymentCategoriesUI = useMemo(() => paymentCategories.map(mapPaymentCategoryToUI), [paymentCategories, mapPaymentCategoryToUI])

  const handleCategoryClick = useCallback(
    (id: string) => {
      const clickedPaymentCategory = paymentCategories.find(
        (category) => category.category_id === id,
      )

      if (!clickedPaymentCategory) {
        return
      }

      onCategoryClick(clickedPaymentCategory)
    },
    [paymentCategories],
  )

  return (
    <Payments
      paymentCategories={paymentCategoriesUI}
      refreshing={refreshing}
      onRefresh={fetchPaymentCategoriesFx}
      onCategoryClick={handleCategoryClick}
    />
  )
}
