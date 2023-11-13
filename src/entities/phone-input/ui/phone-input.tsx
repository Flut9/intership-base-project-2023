import { Input } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"
import { IconPhone } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"
import { Loader } from "@shared/ui/atoms"
import { useState, useCallback } from "react"

type Props = {
    phonenumber: string,
    isShowingLoader: boolean,
    isValid: boolean,
    onPhoneChange: (phonenumber: string) => void
}

export const PhoneInput = ({ phonenumber, isShowingLoader, isValid, onPhoneChange }: Props) => {
    const theme = useTheme()
    const [isFocused, setFocused] = useState(false)
    
    const onFocus = useCallback(() => {
        setFocused(true)
      }, [setFocused])
    
      const onEndEdition = useCallback(() => {
        setFocused(false)
      }, [setFocused])

    return (
        <Wrapper>
            <StyledIconUser 
                size={24} 
                color={isValid ? theme.palette.accent.primary : theme.palette.indicator.error} 
            />
            <StyledInput 
                value={!isFocused && phonenumber.length === 3 ? '' : phonenumber}
                placeholder="Телефон"
                placeholderTextColor={
                    isValid ? theme.palette.text.tertiary : theme.palette.indicator.error
                }
                isValid={isValid}
                onChangeText={onPhoneChange}
                onFocus={onFocus}
                onEndEditing={onEndEdition}
            />

            {isShowingLoader && <StyledLoader />}
        </Wrapper>
    )
}
 
const Wrapper = styled.View`
    padding: 14px 24px;
    background-color: ${({ theme }) => theme.palette.content.primary};
    flex-direction: row;
    align-items: center;
    border-radius: 32px;
`

const StyledIconUser = styled(IconPhone)``

const StyledInput = styled(Input)<{ isValid: boolean }>`
    margin-left: 16px;
    margin-right: 16px;
    color: ${({ theme, isValid }) => isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`

const StyledLoader = styled(Loader)``