import axios from 'axios'

import { PaymentCategoriesAPI } from './types'

export const getPaymentCategories = async () => {
  const response = await axios.get<PaymentCategoriesAPI>(
    'https://github.com/kode-frontend/files/raw/main/categories.json',
  )
  return response.data
}
