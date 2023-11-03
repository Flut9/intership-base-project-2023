import { IconCardWhite, IconChevronDown } from "@shared/ui/icons"
import { Typography } from "@shared/ui/atoms"
import { useTheme } from "@shared/hooks"
import styled from "styled-components/native"

export const CardStub = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <TitleWrapper>
                <Title variant="body15Semibold">Карта для оплаты</Title>
            </TitleWrapper>

            <CardWrapper>
                <IconCardWhite color={theme.palette.accent.tertiary} />

                <CardTextWrapper>
                    <CardTitle variant="body15Regular">Карта зарплатная</CardTitle>
                    <CardAmoutText variant="body15Regular">457 334,00 ₽</CardAmoutText>
                </CardTextWrapper>

                <IconChevronDown color="#706D76" />
            </CardWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.secondary};
`

const TitleWrapper = styled.View`
    padding: 16px;
`

const Title = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.tertiary};
`

const CardWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px;
`

const CardTextWrapper = styled.View`
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16px;
    flex: 1;
`

const CardTitle = styled(Typography)``

const CardAmoutText = styled(Typography)`
    margin-top: 4px;
`
