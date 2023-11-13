import { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useTheme } from '@shared/hooks'
import { Typography } from '@shared/ui/atoms'
import { IconCheck, IconClose } from '@shared/ui/icons'
import { PrimaryButton } from '@shared/ui/molecules'
import { styled } from '@shared/ui/theme'

type Props = {
  amount: number
  isSucceeded: boolean
  onDoneButtonClick: () => void
}

export const PaymentStatus = ({
  amount,
  isSucceeded,
  onDoneButtonClick,
}: Props) => {
  const theme = useTheme()
  const { top, bottom } = useSafeAreaInsets()

  const amountStr = useMemo(() => `${amount} ₽`, [amount])

  return (
    <Wrapper topPadding={top} bottomPadding={bottom}>
      <ContentWrapper>
        <IconCircleWrapper>
          <IconCircle>
            <IconWrapper isSucceeded={isSucceeded}>
              {isSucceeded ? (
                <IconCheck size={40} color={theme.palette.button.secondary} />
              ) : (
                <IconClose size={40} color={theme.palette.button.secondary} />
              )}
            </IconWrapper>
          </IconCircle>
        </IconCircleWrapper>

        <AmountTitle variant="body17Regular">Оплачено</AmountTitle>
        <AmountText variant="title">{amountStr}</AmountText>
      </ContentWrapper>

      <DoneButton onPress={onDoneButtonClick}>Готово</DoneButton>
    </Wrapper>
  )
}

const Wrapper = styled.View<{ topPadding: number; bottomPadding: number }>`
  flex: 1;
  padding: 16px;
  padding-top: ${({ topPadding }) => topPadding}px;
  padding-bottom: ${({ bottomPadding }) => bottomPadding}px;
`

const IconCircleWrapper = styled.View`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  background-color: rgba(112, 109, 118, 0.1);
`

const IconCircle = styled.View`
  width: 112px;
  height: 112px;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  background-color: rgba(112, 109, 118, 0.1);
`

const IconWrapper = styled.View<{ isSucceeded: boolean }>`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: ${({ theme, isSucceeded }) => {
    return isSucceeded
      ? theme.palette.indicator.done
      : theme.palette.indicator.error
  }};
  border-radius: 35px;
`

const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const AmountTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.content.tertiary};
  margin-top: 16px;
`

const AmountText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: 8px;
`

const DoneButton = styled(PrimaryButton)``
