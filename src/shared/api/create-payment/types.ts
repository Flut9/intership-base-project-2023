export type PaymentOperationAPI = {
  card_id: number
  service_id: string
  size: number
  size_cashback?: number
  comment?: string
  period_from: string
  period_to?: string
}

export type PaymentStatusAPI = {
  success: boolean
}

export type PaymentStatusUI = {
  success: boolean
}

export const mapPaymentStatusToUI = (
  response: PaymentStatusAPI,
): PaymentStatusUI => {
  return {
    success: response.success,
  }
}
