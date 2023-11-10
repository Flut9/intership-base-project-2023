import { useCallback, useEffect, useMemo } from 'react'

import { usePaymentsCategories } from '@entities/payments-categories'

import { mapPaymentCategoryToUI } from '@shared/api/payment-categories'

import { Payments } from './payments'
import axios from 'axios'
import { addPaymentCategories } from '@entities/payments'

type Props = {
  onCategoryClick: (categoryId: string, categoryName: string) => void
}

export const PaymentsConnector = ({ onCategoryClick }: Props) => {
  const {
    paymentCategories,
    isLoading
  } = usePaymentsCategories()

  if (!paymentCategories) {
    console.log(1)
    return
  }

  console.log(2)

  useEffect(() => {
    addPaymentCategories(paymentCategories)
  }, [paymentCategories])

  const paymentCategoriesUI = useMemo(() => paymentCategories.map(mapPaymentCategoryToUI), [paymentCategories, mapPaymentCategoryToUI])

  const handleCategoryClick = useCallback(
    (id: string) => {
      const clickedPaymentCategory = paymentCategories.find(
        (category) => category.category_id === id,
      )

      if (!clickedPaymentCategory) {
        return
      }

      onCategoryClick(
        clickedPaymentCategory.category_id,
        clickedPaymentCategory.category_name
      )
    },
    [paymentCategories],
  )

  return (
    <Payments
      paymentCategories={paymentCategoriesUI}
      onCategoryClick={handleCategoryClick}
    />
  )
}
