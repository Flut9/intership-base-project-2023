import { useMemo, useState } from "react"

export const useFormatPhoneNumber = (initialPhonenumber: string) => {
    const [phonenumber, setPhonenumber] = useState(initialPhonenumber)

    const formattedPhonenumber = useMemo(() => {
        const matches = phonenumber.replace("+7", "").replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

        if (!matches) {
            return "+7"
        }

        let formattedPhonenumber = "+7 "
        formattedPhonenumber += !matches[2] ? matches[1] : matches[1] + ' ' + matches[2] + (matches[3] ? ' ' + matches[3] : '') + (matches[4] ? ' ' + matches[4] : '')
        return formattedPhonenumber
    }, [phonenumber])

    return {
        formattedPhonenumber,
        setPhonenumber
    }
}