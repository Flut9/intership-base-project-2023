export type TConfirmAuthBody = {
    otpId: string,
    phone: string,
    otpCode: string
}

export type ConfirmAuthAPI = {
    guestToken: string
}