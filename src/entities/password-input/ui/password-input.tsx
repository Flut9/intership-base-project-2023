import { styled } from "@shared/ui/theme"
import { IconLock1, IconEye, IconEyeOff } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"
import { Input } from "@shared/ui/atoms"
import { useCallback, useState } from "react"

type Props = {
    password: string,
    onPasswordChange: (password: string) => void
}

export const PasswordInput = ({ password, onPasswordChange }: Props) => {
    const [isPasswordShowing, setPasswordShowing] = useState(false)
    const theme = useTheme()

    const onToggleSecureButtonClick = useCallback(() => {
        setPasswordShowing(prev => !prev)
    }, [isPasswordShowing, setPasswordShowing])

    return (
        <Wrapper>
            <StyledIconLock color={theme.palette.accent.primary} />

            <StyledInput 
                value={password}
                placeholder="Пароль"
                secureTextEntry={!isPasswordShowing}               
                onChangeText={onPasswordChange}
            />

            <ToggleSecureButton onPress={onToggleSecureButtonClick}>
                {isPasswordShowing 
                    ? <StyledIconEye color={theme.palette.text.secondary} /> 
                    : <StyledIconEyeOff color={theme.palette.text.tertiary} />
                }
            </ToggleSecureButton>
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

// const StyledIconLock = styled(IconLock1)``

// const StyledInput = styled(Input)`
//     margin-left: 16px;
//     margin-right: 16px;
//     color: ${({ theme }) => theme.palette.text.primary};
// `

// const ToggleSecureButton = styled.TouchableOpacity``

// const StyledIconEye = styled(IconEye)``

// const StyledIconEyeOff = styled(IconEyeOff)``