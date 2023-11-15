import { useFormatPhoneNumber, validatePhone } from "@entities/payment-phone-input"
import { useCallback, useEffect, useState } from "react"
import { setAuthPhone } from "../model/store"

export const usePhone = (initialValue: string) => {
    const [isPhoneValid, setPhoneValid] = useState(true)
    const {
        formattedPhonenumber, 
        setPhonenumber
    } = useFormatPhoneNumber(initialValue)

    useEffect(() => {
        setAuthPhone(formattedPhonenumber)
    }, [formattedPhonenumber, setAuthPhone])

    const validate = useCallback(() => {
        const isValid = validatePhone(formattedPhonenumber)
        setPhoneValid(isValid)
        return isValid
    }, [formattedPhonenumber, validatePhone, setPhoneValid])

    return {
        phone: formattedPhonenumber,
        isPhoneValid,
        validatePhone: validate,
        setPhone: setPhonenumber
    }
}