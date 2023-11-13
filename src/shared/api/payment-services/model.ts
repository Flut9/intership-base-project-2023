import { api } from '@shared/config/api'

import { PaymentOperatorAPI } from './types'

export const getPaymentOperator = async (serviceId: number) => {
  const response = await api.get<PaymentOperatorAPI>(
    `/core/payment/${serviceId}`,
  )
  return response.data
}
