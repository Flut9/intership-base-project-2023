import { CreatePayment } from "./create-payment"
import { PaymentServiceAPI, mapPaymentServiceToUI } from "@shared/api/payment-categories"
import { useMemo } from "react"

type Props = {
    selectedService: PaymentServiceAPI
}

export const CreatePaymentConnector = ({ selectedService }: Props) => {
    const selectedServiceUI = useMemo(() => mapPaymentServiceToUI(selectedService), [selectedService])

    return (
        <CreatePayment selectedService={selectedServiceUI} />
    )   
}