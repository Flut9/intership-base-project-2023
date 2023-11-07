import { useMemo, useState } from "react"
import { formatPhonenumber } from "../lib"

export const useFormatPhoneNumber = (initialPhonenumber: string) => {
    const [phonenumber, setPhonenumber] = useState(initialPhonenumber)

    const formattedPhonenumber = useMemo(() => formatPhonenumber(phonenumber), [phonenumber])

    return {
        formattedPhonenumber,
        setPhonenumber
    }
}