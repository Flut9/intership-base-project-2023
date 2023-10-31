import { PaymentCategoriesAPI } from "@shared/api/payment-categories"
import { getPaymentCategories } from "@shared/api/payment-categories"
import { useCallback, useEffect, useState } from "react"

export const usePaymentsCategories = () => {
    const [paymentCategories, setPaymentCategories] = useState<PaymentCategoriesAPI>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetchPaymentCategories()
    }, [])

    const fetchPaymentCategories = useCallback(async () => {
        setLoading(true)

        const response = await getPaymentCategories()

        if (!response) {
            return
        }

        setPaymentCategories(response)
        setLoading(false)
    }, [setPaymentCategories, getPaymentCategories])

    return { paymentCategories, isLoading }
}