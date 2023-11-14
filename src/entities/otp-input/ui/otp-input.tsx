import { Typography } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"

type Props = {
    value: string,
    isValid: boolean
}

export const OtpInput = ({ value, isValid }: Props) => {
    return (
        <Wrapper>
            <OtpText isValid={isValid} variant="subtitle">{value}</OtpText>
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