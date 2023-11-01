import { useMemo } from "react"
import { Payments } from "./payments"
import { usePaymentsCategories } from "@entities/payments-categories"
import { mapPaymentCategoryToUI } from "@shared/api/payment-categories"

export const PaymentsConnector = () => {
    const { paymentCategories, isLoading } = usePaymentsCategories()

    const paymentCategoriesUI = useMemo(
        () => paymentCategories.map(mapPaymentCategoryToUI),
        [paymentCategories]
    )

    return (
        <Payments 
            paymentCategories={paymentCategoriesUI}
        />
    )
}