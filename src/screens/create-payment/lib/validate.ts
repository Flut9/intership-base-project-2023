import { validatePhone } from '@entities/payment-phone-input'

import { validateAmount } from '@entities/amout-input'

export type ValidFieldsType = {
  isAmountValid: boolean
  isPhoneValid: boolean
}

export const validate = (amount: number, phone: string): ValidFieldsType => {
  return {
    isAmountValid: validateAmount(amount),
    isPhoneValid: validatePhone(phone),
  }
}
