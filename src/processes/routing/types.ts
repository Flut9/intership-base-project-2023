import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { PaymentCategoryAPI } from "@shared/api/payment-categories"

export type MainTabStackParams = {
    Home: undefined,
    PaymentsNavigation: undefined,
    ATMs: undefined,
    Profile: undefined
}

export type PaymentsNavigationProps = BottomTabScreenProps<MainTabStackParams, "PaymentsNavigation">

export type PaymentsStackParams = {
    Payments: undefined,
    PaymentServices: {
        category: PaymentCategoryAPI
    }
}

export type PaymentsScreenProps = NativeStackScreenProps<PaymentsStackParams, "Payments">
export type PaymentServicesScreenProps = NativeStackScreenProps<PaymentsStackParams, "PaymentServices">