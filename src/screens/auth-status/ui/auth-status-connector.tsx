import { AuthStatus } from "./auth-status"

type Props = {
    isSucceeded: boolean,
    onCloseButtonClick: () => void,
    onButtonClick: () => void
}

export const AuthStatusConnector = ({ isSucceeded, onCloseButtonClick, onButtonClick }: Props) => {
    return (
        <AuthStatus 
            isSucceeded={isSucceeded} 
            onCloseButtonClick={onCloseButtonClick}
            onButtonClick={onButtonClick}
        />
    )
}