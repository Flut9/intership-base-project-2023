import { PaymentServiceUI } from "@shared/api/payment-categories"
import { useCallback } from "react"
import { Pressable, ListRenderItemInfo, Platform } from "react-native"
import { PaymentServiceRow } from "@entities/payment-services"
import { SearchBar } from "@shared/ui/molecules/search-bar/search-bar"
import { Typography } from "@shared/ui/atoms"
import styled from "styled-components/native"

type Props = {
    services: PaymentServiceUI[],
    searchText: string,
    onServiceClick: (id: string) => void,
    onSearchBarChange: (searchText: string) => void
}

export const PaymentServices = ({ 
    services, 
    searchText,
    onServiceClick, 
    onSearchBarChange 
}: Props) => {
    const renderListItem = useCallback(({ item }: ListRenderItemInfo<PaymentServiceUI>) => (
        <Pressable onPress={() => onServiceClick(item.id)}>
            <PaymentServiceRow service={item} />
        </Pressable>
    ), [])

    const getKeyExtractor = useCallback((service: PaymentServiceUI) => service.id, [])

    return (
        <Wrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <SearchBarWrapper>
                <SearchBar 
                    placeholder="Поиск" 
                    value={searchText}
                    onChangeText={onSearchBarChange}
                />
            </SearchBarWrapper>

            {services.length
                ? (
                    <ServicesList
                        data={services}
                        renderItem={renderListItem}
                        keyExtractor={getKeyExtractor}  
                    />
                )
                : (
                    <EmptyWrapper>
                        <EmptyTitle variant="body15Regular">
                            По вашему запросу ничего не найдено
                        </EmptyTitle>
                    </EmptyWrapper>
                )
            }
            
        </Wrapper>
    )
}

const Wrapper = styled.KeyboardAvoidingView`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    flex: 1;
`

const SearchBarWrapper = styled.View`
    padding: 16px;
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const ServicesList = styled.FlatList`
    flex: 1;
`

const EmptyWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const EmptyTitle = styled(Typography)``