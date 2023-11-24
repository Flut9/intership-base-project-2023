import { authApi } from "@shared/config/api"
import { LoginInfoAPI, TLoginBody } from "./types"

export const postLogin = async (body: TLoginBody) => {
    const response = await authApi.post<LoginInfoAPI>("/enter", body)
    return response.data
}