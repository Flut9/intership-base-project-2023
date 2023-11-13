import { useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native/types'

import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

type Props = {
  values: number[]
  onChipClick: (chipValue: number) => void
}

const getExtractorKey = (item: number) => String(item)

export const ChipsList = ({ values, onChipClick }: Props) => {
  const renderListItem = useCallback(({ item }: ListRenderItemInfo<number>) => {
    return (
      <ListItemWrapper onPress={() => onChipClick(item)}>
        <ListItemText variant="caption1">{`${item} ₽`}</ListItemText>
      </ListItemWrapper>
    )
  }, [])

  const renderSeparatorItem = useCallback(() => <SeparatorView />, [])

  return (
    <Wrapper>
      <HorizontalList
        data={values}
        renderItem={renderListItem}
        keyExtractor={getExtractorKey}
        ItemSeparatorComponent={renderSeparatorItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentInset={{
          right: 32,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View``

const HorizontalList = styled.FlatList`
  padding-left: 16px;
`

const ListItemWrapper = styled.Pressable`
  padding: 6px 16px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: 16px;
`

const ListItemText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`

const SeparatorView = styled.View`
  width: 16px;
`
