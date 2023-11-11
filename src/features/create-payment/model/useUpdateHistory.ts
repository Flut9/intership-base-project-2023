import { PaymentOperationAPI } from "@shared/api/create-payment"
import { postPaymentOperation } from "@shared/api/create-payment/model"
import { useMutation } from "@tanstack/react-query"

export const useUpdateHistory = () => {
    const { mutate } = useMutation({
        mutationFn: postPaymentOperation
    })

    return {
        updateHistory: mutate
    }
}