import { PaymentCategoriesAPI } from "./types"
import axios from "axios"

export const getPaymentCategories = async () => {
    try {
        const response = await axios.get<PaymentCategoriesAPI>("https://github.com/kode-frontend/files/raw/main/categories.json")
        return response.data
    } catch (error) {
        console.log(error)
    }
}