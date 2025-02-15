import { useTheme } from "@shared/hooks"
import { Loader } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"

export const FullscreenLoader = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <Loader color={theme.palette.text.primary} />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`