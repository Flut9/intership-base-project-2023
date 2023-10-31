import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type MainTabStackParams = {
    Home: undefined,
    PaymentsNavigation: undefined,
    ATMs: undefined,
    Profile: undefined
}

export type PaymentsStackParams = {
    Payments: undefined
}

export type PaymentsScreenProps = NativeStackScreenProps<PaymentsStackParams, "Payments">