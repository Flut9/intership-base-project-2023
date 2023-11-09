import { createEffect, createEvent, createStore } from "effector"
import { PaymentCategoryAPI } from "@shared/api/payment-categories"
import { getPaymentCategories } from "@shared/api/payment-categories"
import { persist } from "effector-storage"
import { storageAdapter } from "@shared/lib"
import { addSnack } from "@app/snack/model/store"

export const $paymentCategories = createStore<PaymentCategoryAPI[]>([])
export const $lastRefreshDate = createStore<number>(0)

export const fetchPaymentCategoriesFx = createEffect(async () => {
    try {
        return await getPaymentCategories()
    } catch (e) {
        addSnack({
            message: "Что-то пошло не так",
            durationToHide: 3000
        })
    }
})

$paymentCategories.on(fetchPaymentCategoriesFx.doneData, (_, payload) => payload?.category ?? [])
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