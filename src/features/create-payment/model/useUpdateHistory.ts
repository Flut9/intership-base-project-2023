import { useMutation } from '@tanstack/react-query'

import { PaymentOperationAPI } from '@shared/api/create-payment'
import { postPaymentOperation } from '@shared/api/create-payment/model'

export const useUpdateHistory = () => {
  const { mutate } = useMutation({
    mutationFn: postPaymentOperation,
  })

  return {
    updateHistory: mutate,
  }
}
