import { Typography } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"

type Props = {
    value: string,
    isValid: boolean,
    isFocused: boolean
}

export const OtpInput = ({ value, isValid, isFocused }: Props) => {
    return (
        <Wrapper>
            <OtpText isValid={isValid} variant="subtitle">{value}</OtpText>
            {isFocused && <UnderscoreView />}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    width: 40px;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
`

const OtpText = styled(Typography)<{ isValid: boolean }>`
    color: ${({ theme, isValid }) => isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`

const UnderscoreView = styled.View`
    position: absolute;
    right: 8px;
    left: 8px;
    bottom: 8px;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.accent.primary};
`