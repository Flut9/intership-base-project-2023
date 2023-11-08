import { createEffect, createStore } from "effector"
import { PaymentCategoryAPI } from "@shared/api/payment-categories"
import { getPaymentCategories } from "@shared/api/payment-categories"

export const $paymentCategories = createStore<PaymentCategoryAPI[]>([])

export const fetchPaymentCategoriesFx = createEffect(async () => {
    return await getPaymentCategories()
})

$paymentCategories.on(fetchPaymentCategoriesFx.doneData, (_, payload) => payload.category)