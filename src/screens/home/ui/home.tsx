import { Typography } from "@shared/ui/atoms"
import styled from "styled-components/native"

const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.palette.background.primary};
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Home = () => {
    return (
        <Wrapper>
            <Typography align="center">Главная</Typography>
        </Wrapper>
    )
}