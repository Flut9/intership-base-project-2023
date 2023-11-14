import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { PaymentServiceAPI } from '@shared/api/payment-categories'

export type MainTabStackParams = {
  Home: undefined
  PaymentsNavigation: undefined
  ATMs: undefined
  Profile: undefined
}

export type PaymentsNavigationProps = BottomTabScreenProps<
  MainTabStackParams,
  'PaymentsNavigation'
>

export type AuthStackParams = {
  PhoneAuth: undefined
  AuthStatus: {
    isSucceeded: boolean
  }
}

export type PhoneAuthScreenProps = NativeStackScreenProps<
  AuthStackParams,
  "PhoneAuth"
>
export type AuthStatusScreenProps = NativeStackScreenProps<
  AuthStackParams,
  "AuthStatus"
>

export type PaymentsStackParams = {
  Payments: undefined
  PaymentServices: {
    categoryId: string
    categoryName: string
  }
  CreatePayment: {
    selectedService: PaymentServiceAPI
  }
  PaymentStatus: {
    amount: number
    isSucceeded: boolean
  }
}

export type PaymentsScreenProps = NativeStackScreenProps<
  PaymentsStackParams,
  'Payments'
>
export type PaymentServicesScreenProps = NativeStackScreenProps<
  PaymentsStackParams,
  'PaymentServices'
>
export type CreatePaymentScreenProps = NativeStackScreenProps<
  PaymentsStackParams,
  'CreatePayment'
>
export type PaymentStatusScreenProps = NativeStackScreenProps<
  PaymentsStackParams,
  'PaymentStatus'
>
