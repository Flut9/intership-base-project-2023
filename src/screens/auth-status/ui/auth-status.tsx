import { styled } from "@shared/ui/theme"
import { PrimaryButton } from "@shared/ui/molecules"
import { Typography } from "@shared/ui/atoms"
import { IconAuthError, IconAuthSuccess, IconClose } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"
import { useMemo } from "react"

const ICON_SIZE = 148
const CLOSE_ICON_CLOSE = 24

type Props = {
    isSucceeded: boolean,
    onCloseButtonClick: () => void,
    onButtonClick: () => void
}

export const AuthStatus = ({ isSucceeded, onCloseButtonClick, onButtonClick }: Props) => {
    const theme = useTheme()

    const icon = useMemo(() => {
        return (
            isSucceeded
                ? <StyledIconAuthSuccess size={ICON_SIZE} />
                : <StyledIconAuthError size={ICON_SIZE}/>
        )
    }, [isSucceeded])

    const titleText = useMemo(() => isSucceeded ? "Все готово" : "Внимание", [isSucceeded])

    const messageText = useMemo(() => {
        return (
            isSucceeded
                ? "Теперь вы можете использовать мобильное приложение Kode bank" 
                : "Сервер временно недоступен. Пожалуйста, повторите попытку позднее"
        )
    }, [isSucceeded])

    const buttonText = useMemo(() => isSucceeded ? "Продолжить" : "Повторить", [isSucceeded])

    return (
        <Wrapper>
            <ContentWrapper>
                {icon}
                <TitleText variant="subtitle">{titleText}</TitleText>
                <MessageText variant="body15Regular" align="center">
                    {messageText}
                </MessageText>
            </ContentWrapper>

            <Button onPress={onButtonClick}>{buttonText}</Button>

            {!isSucceeded && (
                <CloseButton onPress={onCloseButtonClick}>
                    <StyledIconClose size={CLOSE_ICON_CLOSE} color={theme.palette.button.secondary}/>
                </CloseButton>
            )}
        </Wrapper>
    )   
}

const Wrapper = styled.View`
    flex: 1;
    padding: 0 16px;
`

const ContentWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledIconAuthError = styled(IconAuthError)``

const StyledIconAuthSuccess = styled(IconAuthSuccess)``

const TitleText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
    margin-top: 32px;
`

const MessageText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
    margin-top: 16px;
`

const Button = styled(PrimaryButton)``

const CloseButton = styled.Pressable`
    position: absolute;
    top: 0;
    left: 16px;
`

const StyledIconClose = styled(IconClose)``