export type PaymentCategoriesAPI = {
    category: PaymentCategoryAPI[]
}

export type PaymentCategoryAPI = {
    category_id: string,
    category_name: string,
    category_icon: string,
    services: PaymentServiceAPI[]
}

export type PaymentServiceAPI = {
    service_id: string,
    service_name: string,
    service_icon: string
}

export type PaymentCategoriesUI = {
    categories: PaymentCategoryUI[]
}

export type PaymentCategoryUI = {
    id: string,
    name: string,
    icon: string,
    services: PaymentServiceUI[]
}

export type PaymentServiceUI = {
    id: string,
    name: string,
    icon: string
}

export const mapPaymentCategoriesToUI = (response: PaymentCategoriesAPI): PaymentCategoriesUI => {
    return {
        categories: response.category.map(mapPaymentCategoryToUI)
    }
}

export const mapPaymentCategoryToUI = (response: PaymentCategoryAPI): PaymentCategoryUI => {
    return {
        id: response.category_id,
        name: response.category_name,
        icon: response.category_icon,
        services: response.services.map(mapPaymentServiceToUI)
    }
}

const mapPaymentServiceToUI = (response: PaymentServiceAPI): PaymentServiceUI => {
    return {
        id: response.service_id,
        name: response.service_name,
        icon: response.service_icon
    }
}