import { PaymentCategoryUI } from "@shared/api/payment-categories"
import { Typography } from "@shared/ui/atoms"
import styled from "styled-components/native"

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.primary};
    flex: 1;
    justify-content: center;
    align-items: center;
`

type Props = {
    paymentCategories: PaymentCategoryUI[]
}

export const Payments = ({ paymentCategories }: Props) => {    
    return (
        <Wrapper>
            <Typography align="center">Платежи</Typography>
        </Wrapper>
    )
}