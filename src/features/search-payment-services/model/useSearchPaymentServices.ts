import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useState, useMemo } from "react"

export const useSearchPaymentServices = (services: PaymentServiceUI[]) => {
    const [searchText, setSearchText] = useState("")

    const filteredServices = useMemo(() => {
        return services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()))
    }, [services, searchText])

    return { 
        filteredServices,
        searchText,
        setSearchText
    }
}