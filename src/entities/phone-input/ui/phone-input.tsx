import { Input } from "@shared/ui/atoms"
import { styled } from "@shared/ui/theme"
import { IconPhone } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"
import { Loader } from "@shared/ui/atoms"
import { useEffect, useCallback, useRef } from "react"
import { TextInput } from "react-native/types"

type Props = {
    phonenumber: string,
    isShowingLoader: boolean,
    isValid: boolean,
    isFocused: boolean,
    onFocusChange: (isFocused: boolean) => void,
    onPhoneChange: (phonenumber: string) => void
}

export const PhoneInput = ({ phonenumber, isShowingLoader, isValid, isFocused, onFocusChange, onPhoneChange }: Props) => {
    const theme = useTheme()
    const inputRef = useRef<TextInput | null>(null)

    const onFocus = useCallback(() => {
        onFocusChange(true)
    }, [onFocusChange])

    const onEndEditing = useCallback(() => {
        onFocusChange(false)
    }, [onFocusChange])

    useEffect(() => {
        if (isFocused) {
            inputRef.current?.focus()
        } else {
            inputRef.current?.blur()
        }
    }, [isFocused, inputRef])

    return (
        <Wrapper>
            <StyledIconUser 
                size={24} 
                color={isValid ? theme.palette.accent.primary : theme.palette.indicator.error} 
            />
            <StyledInput 
                ref={inputRef}
                value={!isFocused && phonenumber.length === 3 ? '' : phonenumber}
                placeholder="Телефон"
                placeholderTextColor={
                    isValid ? theme.palette.text.tertiary : theme.palette.indicator.error
                }
                isValid={isValid}
                onChangeText={onPhoneChange}
                onFocus={onFocus}
                onEndEditing={onEndEditing}
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