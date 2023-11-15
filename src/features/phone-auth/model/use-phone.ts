import { useFormatPhoneNumber, validatePhone } from "@entities/payment-phone-input"
import { useCallback, useEffect, useState } from "react"
import { setAuthPhone } from "./store"

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
        setPhoneValid(validatePhone(formattedPhonenumber))
    }, [formattedPhonenumber, validatePhone, setPhoneValid])

    return {
        phone: formattedPhonenumber,
        isPhoneValid,
        validatePhone: validate,
        setPhone: setPhonenumber
    }
}