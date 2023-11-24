import { authApi } from "@shared/config/api"
import { ConfirmAuthAPI, TConfirmAuthBody } from "./types"

export const postConfirmAuth = async (body: TConfirmAuthBody) => {
    const response = await authApi.post<ConfirmAuthAPI>("/confirm", body)
    return response.data
}