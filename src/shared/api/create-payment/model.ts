import { api } from '@shared/config/api'

import { PaymentOperationAPI, PaymentStatusAPI } from './types'

export const postPaymentOperation = async (body: PaymentOperationAPI) => {
  const response = await api.post<PaymentStatusAPI>('/core/history', body)
  return response.data
}
