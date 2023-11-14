import { styled } from "@shared/ui/theme"
import { PrimaryButton } from "@shared/ui/molecules"
import { Typography } from "@shared/ui/atoms"
import { IconAuthError, IconAuthSuccess, IconClose } from "@shared/ui/icons"
import { useTheme } from "@shared/hooks"

type Props = {
    isSucceeded: boolean,
    onCloseButtonClick: () => void,
    onButtonClick: () => void
}

export const AuthStatus = ({ isSucceeded, onCloseButtonClick, onButtonClick }: Props) => {
    const theme = useTheme()

    return (
        <Wrapper>
            <ContentWrapper>
                {isSucceeded
                    ? <StyledIconAuthSuccess size={148} />
                    : <StyledIconAuthError size={148}/>
                }
                <TitleText variant="subtitle">{isSucceeded ? "Все готово" : "Внимание"}</TitleText>
                <MessageText variant="body15Regular" align="center">
                    {isSucceeded
                        ? "Теперь вы можете использовать мобильное приложение Kode bank" 
                        : "Сервер временно недоступен. Пожалуйста, повторите попытку позднее"
                    }
                </MessageText>
            </ContentWrapper>

            <Button onPress={onButtonClick}>{isSucceeded ? "Продолжить" : "Повторить"}</Button>

            {!isSucceeded && (
                <CloseButton onPress={onCloseButtonClick}>
                    <StyledIconClose size={24} color={theme.palette.button.secondary}/>
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