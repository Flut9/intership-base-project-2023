import { Input } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"
import { IconPhone } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"
import { Loader } from "@shared/ui/atoms"
import { useState, useCallback } from "react"

type Props = {
    phonenumber: string,
    isShowingLoader: boolean,
    onPhoneChange: (phonenumber: string) => void
}

export const PhoneInput = ({ phonenumber, isShowingLoader, onPhoneChange }: Props) => {
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
                color={theme.palette.accent.primary} 
            />
            <StyledInput 
                value={!isFocused && phonenumber.length === 3 ? '' : phonenumber}
                placeholder="Телефон"
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

const StyledInput = styled(Input)`
    margin-left: 16px;
    margin-right: 16px;
`

const StyledLoader = styled(Loader)``