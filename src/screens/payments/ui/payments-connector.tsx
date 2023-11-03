import { useCallback, useMemo } from "react"
import { Payments } from "./payments"
import { usePaymentsCategories } from "@entities/payments-categories"
import { mapPaymentCategoryToUI, PaymentCategoryAPI } from "@shared/api/payment-categories"

type Props = {
    onCategoryClick: (category: PaymentCategoryAPI) => void
}

export const PaymentsConnector = ({ onCategoryClick }: Props) => {
    const { paymentCategories, isLoading } = usePaymentsCategories()

    const paymentCategoriesUI = useMemo(
        () => paymentCategories.map(mapPaymentCategoryToUI), 
        [paymentCategories]
    )

    const handleCategoryClick = useCallback((id: string) => {
        const clickedPaymentCategory = paymentCategories.find(category => category.category_id === id)

        if (!clickedPaymentCategory) {
            return
        }

        onCategoryClick(clickedPaymentCategory)
    }, [paymentCategories]) 

    return (
        <Payments 
            paymentCategories={paymentCategoriesUI}
            onCategoryClick={handleCategoryClick}
        />
    )
}