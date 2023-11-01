import { useCallback } from "react"
import { FlatList, Pressable } from "react-native"
import { ListRenderItemInfo } from "react-native/types"
import { PaymentCategoryUI } from "@shared/api/payment-categories"
import { PaymentCategoryRow } from "@entities/payments-categories"
import styled from "styled-components/native"

type Props = {
    paymentCategories: PaymentCategoryUI[]
}

export const Payments = ({ paymentCategories }: Props) => {    
    const renderListItem = useCallback(({ item }: ListRenderItemInfo<PaymentCategoryUI>) => (
        <Pressable onPress={() => {}}>
            <PaymentCategoryRow category={item} />
        </Pressable>
    ), [])

    const getKeyExtractor = useCallback((category: PaymentCategoryUI) => category.id, [])

    return (
        <Wrapper>
            <CategoriesList 
                data={paymentCategories}
                renderItem={renderListItem}
                keyExtractor={getKeyExtractor}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    flex: 1;
`

const CategoriesList = styled.FlatList`
    flex: 1;
` as typeof FlatList