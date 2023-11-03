import { useCallback, useState } from "react"
import { Input } from "@shared/ui/atoms"
import { ClearButton } from "@shared/ui/atoms"
import { useTheme } from "@shared/hooks"
import styled from "styled-components/native"

type Props = {
    iconUri: string,
    phonenumber: string,
    isValid: boolean,
    onPhoneChange: (phonenumber: string) => void
}

export const PhoneInput = ({ iconUri, phonenumber, isValid, onPhoneChange }: Props) => {
    const [isFocused, setFocused] = useState(false)
    const theme = useTheme()

    const onClearButtonClick = useCallback(() => {
        onPhoneChange("")
    }, [onPhoneChange])

    const onFocus = useCallback(() => {
        setFocused(true)
    }, [setFocused])

    const onEndEdition = useCallback(() => {
        setFocused(false)
    }, [setFocused])

    return (
        <Wrapper>
            <IconWrapper>
                <Icon source={{ uri: iconUri }} />
            </IconWrapper>

            <StyledInput
                value={!isFocused && phonenumber.length === 3 ? "" : phonenumber}
                placeholder="Номер телефона"
                keyboardType="numeric"
                isValid={isValid}
                placeholderTextColor={isValid ? theme.palette.text.tertiary : theme.palette.indicator.error}
                onFocus={onFocus}
                onEndEditing={onEndEdition}
                onChangeText={onPhoneChange}
            />

            {phonenumber.length > 3 && <ClearButton size={18} onPress={onClearButtonClick} />}
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

const IconWrapper = styled.View`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`

const Icon = styled.Image`
    flex: 1;
`

const StyledInput = styled(Input)<{ isValid: boolean }>`
    margin-left: 16px;
    margin-right: 16px;
    color: ${({ theme, isValid }) => isValid ? theme.palette.text.primary : theme.palette.indicator.error};
`