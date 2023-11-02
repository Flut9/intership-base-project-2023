import { PressableProps } from "react-native/types"
import { IconClose } from "@shared/ui/icons"
import styled from "styled-components/native"

type Props = PressableProps & {
    size: number
}

export const ClearButton = ({ size, ...props }: Props) => {
    return (
        <Wrapper {...props}>
            <IconClose size={size} />
        </Wrapper>
    )
}

const Wrapper = styled.Pressable`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.text.secondary};
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`