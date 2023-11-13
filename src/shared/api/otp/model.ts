import { api } from "@shared/config/api"
import { OtpCodeAPI } from "./types"

export const postOtpCode = async (body: string) => {
    const response = await api.post<OtpCodeAPI>('/auth/otp_code', body)
    return response.data
}