import { useState, useCallback, useEffect } from "react"
import { getPaymentCategories, PaymentCategoryUI, mapPaymentCategoriesToUI } from "@shared/api/payment-categories"
import { Payments } from "./payments"

export const PaymentsConnector = () => {
    const [paymentCategories, setPaymentCategories] = useState<PaymentCategoryUI[]>()

    useEffect(() => {
        fetchPaymentsCategories()
    }, [])

    const fetchPaymentsCategories = useCallback(async () => {
        const response = await getPaymentCategories()
        
        if (!response) {
            return
        }

        setPaymentCategories(mapPaymentCategoriesToUI(response).categories)
    }, [getPaymentCategories, mapPaymentCategoriesToUI, setPaymentCategories])

    if (!paymentCategories) {
        return <></>
    }

    return (
        <Payments 
            paymentCategories={paymentCategories}
        />
    )
}