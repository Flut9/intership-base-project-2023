import { api } from '@shared/config/api'

import { PaymentCategoriesAPI } from './types'

export const getPaymentCategories = async () => {
  const response = await api.get<PaymentCategoriesAPI>('/core/payment/list')
  return response.data.category
}
