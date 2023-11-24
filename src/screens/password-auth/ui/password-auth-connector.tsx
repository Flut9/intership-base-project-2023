import { usePassword } from "@entities/password-input"
import { addSnack } from "@entities/snack"
import { $guestToken } from "@features/confirm-auth"
import { setAccessToken, setRefreshToken, useLogin } from "@features/login"
import { styled } from "@shared/ui/theme"
import { useStore } from "effector-react"
import { useCallback } from "react"
import { Alert } from "react-native"
import { PasswordAuth } from "./password-auth"

type Props = {
    onExitButtonClick: () => void,
    onLoginSucceeded: () => void,
    onLoginFailed: () => void
}

export const PasswordAuthConnector = ({ onExitButtonClick, onLoginSucceeded, onLoginFailed }: Props) => {
    const { 
        password, 
        isLengthValid,
        isCharactersValid,
        setPassword 
    } = usePassword("")
    const {
        postLogin
    } = useLogin()
    const guestToken = useStore($guestToken)

    const login = useCallback(() => {
        postLogin({
            guestToken: guestToken,
            password: password
        }, {
            onSuccess: loginInfo => {
                setAccessToken(loginInfo.accessToken)
                setRefreshToken(loginInfo.refreshToken)
                onLoginSucceeded()
            },
            onError: onLoginFailed
        })
    }, [postLogin, guestToken, password, setAccessToken, setRefreshToken, onLoginSucceeded, onLoginFailed])

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
        if (isCharactersValid && isLengthValid) {
            login()
        }

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
        }
    }, [isCharactersValid, isLengthValid, login])

    return (
        <PasswordAuth
            password={password}
            onPasswordChange={setPassword}
            onCloseButtonClick={onCloseButtonClick}
            onLoginButtonClick={onLoginButtonClick}
        />
    )
}