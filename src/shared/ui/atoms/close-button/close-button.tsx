import { PressableProps } from 'react-native/types'
import styled from 'styled-components/native'

import { useTheme } from '@shared/hooks'
import { IconClose } from '@shared/ui/icons'

type Props = PressableProps

export const CloseButton = (props: Props) => {
  const theme = useTheme()

  return (
    <Wrapper {...props}>
      <IconClose color={theme.palette.button.secondary} size={16} />
    </Wrapper>
  )
}

const Wrapper = styled.Pressable``
