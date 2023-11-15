import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { OtpCodeAPI } from '@shared/api/otp'

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
  },
  Otp: undefined,
  PasswordAuth: undefined
}

type TAuthStackProps<T extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, T>

export type PhoneAuthScreenProps = TAuthStackProps<"PhoneAuth">
export type AuthStatusScreenProps = TAuthStackProps<"AuthStatus">
export type OtpScreenProps = TAuthStackProps<"Otp">
export type PasswordAuthScreenProps = TAuthStackProps<"PasswordAuth">

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

type TPaymentsStackProps<T extends keyof PaymentsStackParams> = NativeStackScreenProps<PaymentsStackParams, T>

export type PaymentsScreenProps = TPaymentsStackProps<'Payments'>
export type PaymentServicesScreenProps = TPaymentsStackProps<'PaymentServices'>
export type CreatePaymentScreenProps = TPaymentsStackProps<'CreatePayment'>
export type PaymentStatusScreenProps = TPaymentsStackProps<'PaymentStatus'>