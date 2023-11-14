import { OtpInput } from "@entities/otp-input"
import { styled } from "@shared/ui/theme"
import { useMemo } from "react"

type Props = {
    otpCode: string,
    otpLen: number,
    isValid: boolean
}

export const OtpInputs = ({ otpCode, otpLen, isValid }: Props) => {
    const otpArr = useMemo(() => new Array(otpLen).fill(0), [otpLen])

    const middleInputIndex = useMemo(() => otpLen / 2 - 1, [otpLen])

    const otpValues = useMemo(() => otpCode.split(""), [otpCode])

    return (
        <Wrapper>
            {otpArr.map((_, index) => {
                if (index === middleInputIndex) {
                    return (
                        <>
                            <OtpInput
                                value={otpValues[index] ? otpValues[index] : ""}
                                isValid={isValid}
                                key={index} 
                            />
                            <MiddleInputsSeparator 
                                isWhite={otpValues[middleInputIndex + 1] !== undefined}
                                isValid={isValid}
                            />
                        </>
                    )
                }

                return (
                    <OtpInput 
                        value={otpValues[index] ? otpValues[index] : ""}
                        isValid={isValid}
                        key={index} 
                    />
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    column-gap: 6px;
`
    
const MiddleInputsSeparator = styled.View<{ isWhite: boolean, isValid: boolean }>`
    width: 10px;
    height: 2px;
    background-color: ${({ theme, isWhite, isValid }) => {
        if (!isValid) {
            return theme.palette.indicator.error
        }

        if (isWhite) {
            return theme.palette.text.primary
        }

        return theme.palette.content.tertiary
    }};
`