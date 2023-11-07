import { useCallback, useEffect, useState } from 'react'

import { PaymentCategoryAPI } from '@shared/api/payment-categories'
import { getPaymentCategories } from '@shared/api/payment-categories'

export const usePaymentsCategories = () => {
  const [paymentCategories, setPaymentCategories] = useState<
    PaymentCategoryAPI[]
  >([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    fetchPaymentCategories()
  }, [])

  const fetchPaymentCategories = useCallback(async () => {
    setLoading(true)

    const response = await getPaymentCategories()

    setPaymentCategories(response?.category ?? [])
    setLoading(false)
  }, [setPaymentCategories, getPaymentCategories])

  return { paymentCategories, isLoading }
}
