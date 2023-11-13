import axios from 'axios'
import { useCallback, useEffect, useMemo } from 'react'

import { addPaymentCategories } from '@entities/payments'
import { usePaymentsCategories } from '@entities/payments-categories'

import {
  PaymentCategoryUI,
  mapPaymentCategoryToUI,
} from '@shared/api/payment-categories'

import { Payments } from './payments'

type Props = {
  onCategoryClick: (categoryId: string, categoryName: string) => void
}

export const PaymentsConnector = ({ onCategoryClick }: Props) => {
  const { paymentCategories, isLoading } = usePaymentsCategories()

  const paymentCategoriesUI = useMemo(
    () => paymentCategories?.map(mapPaymentCategoryToUI),
    [paymentCategories, mapPaymentCategoryToUI],
  )

  useEffect(() => {
    addPaymentCategories(paymentCategories ?? [])
  }, [paymentCategories, addPaymentCategories])

  const handleCategoryClick = useCallback(
    (id: string) => {
      const clickedPaymentCategory = paymentCategories?.find(
        (category) => category.category_id === id,
      )

      if (!clickedPaymentCategory) {
        return
      }

      onCategoryClick(
        clickedPaymentCategory.category_id,
        clickedPaymentCategory.category_name,
      )
    },
    [paymentCategoriesUI, onCategoryClick],
  )

  return (
    <Payments
      paymentCategories={paymentCategoriesUI ?? []}
      onCategoryClick={handleCategoryClick}
    />
  )
}
