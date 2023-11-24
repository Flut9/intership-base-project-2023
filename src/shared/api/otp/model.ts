import { authApi } from "@shared/config/api"
import { OtpCodeAPI, OtpCodeRequestAPI } from "./types"

export const postOtpCode = async (body: OtpCodeRequestAPI) => {
    const response = await authApi.post<OtpCodeAPI>('/login', body)
    return response.data
}