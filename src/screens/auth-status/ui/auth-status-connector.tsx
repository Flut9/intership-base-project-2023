import { setAuth } from "@features/login"
import { useCallback } from "react"
import { AuthStatus } from "./auth-status"

type Props = {
    isSucceeded: boolean,
    onCloseButtonClick: () => void
}

export const AuthStatusConnector = ({ isSucceeded, onCloseButtonClick }: Props) => {
    const onButtonClick = useCallback(() => {
        setAuth(true)
    }, [setAuth])

    return (
        <AuthStatus 
            isSucceeded={isSucceeded} 
            onCloseButtonClick={onCloseButtonClick}
            onButtonClick={onButtonClick}
        />
    )
}