import { createEffect, createEvent, createStore } from "effector"
import { PaymentCategoryAPI } from "@shared/api/payment-categories"
import { getPaymentCategories } from "@shared/api/payment-categories"
import { persist } from "effector-storage"
import { storageAdapter } from "@shared/lib"

export const $paymentCategories = createStore<PaymentCategoryAPI[]>([])
export const $lastRefreshDate = createStore<number>(0)

export const fetchPaymentCategoriesFx = createEffect(async () => {
    return await getPaymentCategories()
})

$paymentCategories.on(fetchPaymentCategoriesFx.doneData, (_, payload) => payload.category)
$lastRefreshDate.on($paymentCategories, _ => Date.now())

persist({
    store: $paymentCategories,
    adapter: storageAdapter,
    key: "paymentCategories"
})

persist({
    store: $lastRefreshDate,
    adapter: storageAdapter,
    key: "lastRefreshDate"
})