import { Typography } from "@shared/ui/atoms"
import { useCallback } from "react"
import { Pressable } from "react-native"
import { ListRenderItemInfo } from "react-native/types"
import styled from "styled-components/native"

type Props = {
    values: number[],
    onChipClick: (chipValue: number) => void
}

export const ChipsList = ({ values, onChipClick }: Props) => {
    const renderListItem = useCallback(({ item }: ListRenderItemInfo<number>) => {
        return (
            <ListItemWrapper onPress={() => onChipClick(item)}>
                <ListItemText variant="caption1">{`${item} ₽`}</ListItemText>
            </ListItemWrapper>
        )
    }, [])

    const renderSeparatorItem = useCallback(() => <SeparatorView />, [])

    // TODO: - надо что-нибудь придумать
    const getExtractorKey = useCallback((item: number) => String(item), [])

    return (
        <Wrapper>
            <HorizontalList 
                data={values}
                renderItem={renderListItem}
                keyExtractor={getExtractorKey}
                ItemSeparatorComponent={renderSeparatorItem}
                horizontal={true}
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