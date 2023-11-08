import { Typography } from "@shared/ui/atoms"
import { CloseButton } from "@shared/ui/atoms"
import styled from "styled-components/native"

type Props = {
    message: string
}

export const Snack = ({ message }: Props) => {
    return (
        <Wrapper>
            <MessageText variant="body15Regular">{message}</MessageText>
            <StyledCloseButton />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 0;
    left: 8px;
    right: 8px;
    padding: 0 16px;
    background-color: #FB6176;
    border-radius: 20px;
`

const MessageText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
`

const StyledCloseButton = styled(CloseButton)`
    margin-left: 20px;
`