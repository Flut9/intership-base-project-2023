import { useCallback } from 'react'
import { Pressable, RefreshControl } from 'react-native'
import { ListRenderItemInfo } from 'react-native/types'
import styled from 'styled-components/native'

import { PaymentCategoryRow } from '@entities/payments-categories'

import { PaymentCategoryUI } from '@shared/api/payment-categories'

type Props = {
  paymentCategories: PaymentCategoryUI[],
  refreshing: boolean,
  onRefresh: () => void,
  onCategoryClick: (id: string) => void
}

export const Payments = ({ paymentCategories, onCategoryClick, refreshing, onRefresh }: Props) => {
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
        refreshing={refreshing}
        refreshControl={(
          <RefreshControl 
            tintColor={'#fff'} 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
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
