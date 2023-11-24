export type OtpCodeAPI = {
    otpId: string,
    otpCode: string,
    otpLen: number
}

export type OtpCodeUI = {
    otpCode: string
}

export type OtpCodeRequestAPI = {
    phone: string
}

export const mapOtpCodeToUI = (response: OtpCodeAPI): OtpCodeUI => {
    return {
        otpCode: response.otpCode
    }
}