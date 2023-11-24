import { OtpInputs } from "@features/otp"
import { Typography } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"

type Props = {
    otpCode: string,
    otpLen: number,
    isOtpValid: boolean,
    errorMessage: string
}

export const Otp = ({ otpCode, otpLen, isOtpValid, errorMessage }: Props) => {
    return (
        <Wrapper>
            <TitleText variant="body15Regular" align="center">
                {"На ваш номер отправлено \nSMS с кодом подтверждения."}
            </TitleText>
            <OtpInputs 
                otpCode={otpCode}
                otpLen={otpLen}
                isValid={isOtpValid}
            />
            {!isOtpValid && <ErrorText variant="caption2">{errorMessage}</ErrorText>}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const TitleText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 24px;
`

const ErrorText = styled(Typography)`
    color: ${({ theme }) => theme.palette.indicator.error};
    margin-top: 8px;
`