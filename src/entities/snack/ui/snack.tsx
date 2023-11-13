import { useStore } from 'effector-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { useTheme } from '@shared/hooks'
import { Typography } from '@shared/ui/atoms'
import { IconClose } from '@shared/ui/icons'

import { $snacks, removeShowedSnack } from '../model/store'

export const Snack = () => {
  const theme = useTheme()
  const safeAreaInsets = useSafeAreaInsets()
  const [isShowing, setShowing] = useState(false)
  const snacks = useStore($snacks)
  const timeout = useRef(0)

  useEffect(() => {
    clearTimeout(timeout.current)
    if (snacks.length) {
      setShowing(true)
      timeout.current = setTimeout(() => {
        removeShowedSnack()
      }, snacks[0].durationToHide)
    } else {
      setShowing(false)
    }
  }, [snacks])

  const onCloseButtonClick = useCallback(() => {
    removeShowedSnack()
  }, [snacks])

  return (
    <Wrapper isShowing={isShowing} paddingTop={safeAreaInsets.top}>
      <MessageText variant="body15Regular">
        {snacks[0]?.message ?? ''}
      </MessageText>
      <CloseButton onPress={onCloseButtonClick}>
        <IconClose color={theme.palette.button.secondary} size={16} />
      </CloseButton>
    </Wrapper>
  )
}

const Wrapper = styled.View<{ isShowing: boolean; paddingTop: number }>`
  height: 60px;
  flex-direction: row;
  display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: ${({ paddingTop }) => paddingTop}px;
  left: 8px;
  right: 8px;
  padding: 0 16px;
  z-index: 10;
  background-color: #fb6176;
  border-radius: 20px;
  box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.3);
`

const MessageText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

const CloseButton = styled.Pressable`
  margin-left: 20px;
`
