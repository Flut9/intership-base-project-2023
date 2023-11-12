export type PaymentOperatorAPI = {
    service_id: number,
    cashback_percentage: number,
    recipient_mask: string,
    comment_mask?: string
}

export type PaymentOperatorUI = {
    serviceId: number,
    cashbackPercentage: number,
    recipientMask: string,
    commentMask?: string
}

export const mapPaymentOperatorToUI = (response: PaymentOperatorAPI): PaymentOperatorUI => {
    return {
        serviceId: response.service_id,
        cashbackPercentage: response.cashback_percentage,
        recipientMask: response.recipient_mask,
        commentMask: response.comment_mask
    }
}