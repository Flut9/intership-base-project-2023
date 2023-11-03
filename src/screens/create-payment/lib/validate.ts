import { validateAmount } from "@entities/amout-input"
import { validatePhone } from "@features/phone-input"

export type ValidFieldsType = {
    isAmountValid: boolean,
    isPhoneValid: boolean
}

export const validate = (amount: number, phone: string): ValidFieldsType => {
    return {
        isAmountValid: validateAmount(amount),
        isPhoneValid: validatePhone(phone)
    }
}