import { useCallback, useMemo } from "react"
import { mapPaymentServiceToUI, PaymentServiceAPI } from "@shared/api/payment-categories"
import { PaymentServices } from "./payment-services"
import { useSearchPaymentServices } from "@features/search-payment-services"

type Props = {
    services: PaymentServiceAPI[],
    onServiceClick: () => void
}

export const PaymentServicesConnector = ({ services, onServiceClick }: Props) => {
    const servicesUI = useMemo(() => services.map(mapPaymentServiceToUI), [services])
    const { 
        filteredServices, 
        searchText, 
        setSearchText 
    } = useSearchPaymentServices(servicesUI)

    const handleServiceClick = useCallback((id: string) => {
    }, [services])

    return (
        <PaymentServices
            services={filteredServices}
            searchText={searchText}
            onServiceClick={handleServiceClick}
            onSearchBarChange={setSearchText}
        />
    )
}