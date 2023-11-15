import { usePassword } from "@entities/password-input"
import { addSnack } from "@entities/snack"
import { useCallback } from "react"
import { Alert } from "react-native"
import { PasswordAuth } from "./password-auth"

type Props = {
    onExitButtonClick: () => void
}

export const PasswordAuthConnector = ({ onExitButtonClick }: Props) => {
    const { 
        password, 
        isLengthValid,
        isCharactersValid,
        setPassword 
    } = usePassword("")

    const onCloseButtonClick = useCallback(() => {
        Alert.alert(
            "Вы точно хотите выйти?",
            undefined,
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                {
                    text: "Выйти",
                    onPress: onExitButtonClick
                }
            ]
        )
    }, [onExitButtonClick])

    const onLoginButtonClick = useCallback(() => {
        if (isCharactersValid && isLengthValid) {}

        if (!isLengthValid) {
            addSnack({
                message: "Длина пароля должна быть не менее 5 символов",
                durationToHide: 3000
            })
            return
        }

        if (!isCharactersValid) {
            addSnack({
                message: "Пароль может содержать только цифры и буквы",
                durationToHide: 3000
            })
            return
        }
    }, [isCharactersValid, isLengthValid])

    return (
        <PasswordAuth
            password={password}
            onPasswordChange={setPassword}
            onCloseButtonClick={onCloseButtonClick}
            onLoginButtonClick={onLoginButtonClick}
        />
    )
}