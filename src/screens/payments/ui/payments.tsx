import { useCallback } from 'react'
import { Pressable } from 'react-native'
import { ListRenderItemInfo } from 'react-native/types'
import { styled } from '@shared/ui/theme'

import { PaymentCategoryRow } from '@entities/payments-categories'

import { PaymentCategoryUI } from '@shared/api/payment-categories'

type Props = {
  paymentCategories: PaymentCategoryUI[],
  onCategoryClick: (id: string) => void
}

export const Payments = ({ paymentCategories, onCategoryClick }: Props) => {
  const renderListItem = useCallback(
    ({ item }: ListRenderItemInfo<PaymentCategoryUI>) => (
      <Pressable onPress={() => onCategoryClick(item.id)}>
        <PaymentCategoryRow category={item} />
      </Pressable>
    ),
    [onCategoryClick]
  )

  const getKeyExtractor = useCallback(
    (category: PaymentCategoryUI) => category.id,
    [],
  )

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
  margin-top: 16px;
`
