import { CardStub } from "@entities/card-stub"
import { PhoneInput } from "@entities/phone-input"
import { AmountInput } from "@entities/amout-input"
import { ChipsList } from "@entities/chips-list"
import { PaymentServiceUI } from "@shared/api/payment-categories"
import { PrimaryButton } from "@shared/ui/molecules"
import { useFormatPhoneNumber } from "@entities/phone-input"
import { validate } from "../lib"
import { ValidFieldsType } from "../lib"
import { useCallback, useState } from "react"
import { Alert, Platform } from "react-native"
import styled from "styled-components/native"

type Props = {
    selectedService: PaymentServiceUI
}

export const CreatePayment = ({ selectedService }: Props) => {
    const { formattedPhonenumber, setPhonenumber } = useFormatPhoneNumber("")
    const [amount, setAmount] = useState(0)
    const [validation, setValidation] = useState<ValidFieldsType>({
        isAmountValid: true,
        isPhoneValid: true
    })

    const onPhoneChange = useCallback((phonenumber: string) => {
        setPhonenumber(phonenumber)
    }, [setPhonenumber])

    const onContinueButtonClick = useCallback(() => {
        const validation = validate(amount, formattedPhonenumber)
        setValidation(validation)

        Alert.alert(
            validation.isAmountValid && validation.isPhoneValid
            ? "Успех"
            : "Проверьте введенный данные"
        )
    }, [amount, formattedPhonenumber, setValidation, validate])

    const onAmountChange = useCallback((amount: number) => {
        setAmount(amount)
    }, [setAmount])

    const onChipClick = useCallback((chipValue: number) => {
        setAmount(chipValue)
    }, [setAmount])

    return (
        <Wrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView>
                <FormWrapper>
                    <CardStub />

                    <PhoneInputWrapper>
                        <PhoneInput
                            isValid={validation.isPhoneValid}
                            phonenumber={formattedPhonenumber}
                            onPhoneChange={onPhoneChange} 
                            iconUri={selectedService.icon} 
                        />
                    </PhoneInputWrapper>

                    <AmountWrapper>
                        <AmountInputWrapper>
                            <AmountInput 
                                amount={amount} 
                                isValid={validation.isAmountValid}
                                onAmountChange={onAmountChange} 
                            />
                        </AmountInputWrapper>
                        <ChipsList 
                            values={[100, 500, 2500, 5000, 10000, 20000]} 
                            onChipClick={onChipClick} 
                        />
                    </AmountWrapper>
                </FormWrapper>

                <ButtonWrapper>
                    <PrimaryButton onPress={onContinueButtonClick}>Продолжить</PrimaryButton>
                </ButtonWrapper>
            </ScrollView>
        </Wrapper>
    )
}

const Wrapper = styled.KeyboardAvoidingView`
    flex: 1;
`

const ScrollView = styled.ScrollView`
    flex: 1;
`

const FormWrapper = styled.View``

const PhoneInputWrapper = styled.View`
    padding: 16px;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    margin-top: 16px;
`

const AmountWrapper = styled.View`
    margin-top: 16px;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding-bottom: 16px;
`

const AmountInputWrapper = styled.View`
    padding: 16px;
`

const ButtonWrapper = styled.View`
    padding: 16px;
`