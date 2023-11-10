import axios from 'axios'

import { PaymentCategoriesAPI } from './types'

export const getPaymentCategories = async () => {
  const response = await axios.get<PaymentCategoriesAPI>(
    '/core/payment/list',
  )
  return response.data
}
