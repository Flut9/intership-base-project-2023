import { PressableProps } from 'react-native/types'
import styled from 'styled-components/native'

import { useTheme } from '@shared/hooks'
import { IconBack } from '@shared/ui/icons'

type Props = PressableProps

export const BackButton = (props: Props) => {
  const theme = useTheme()

  return (
    <Wrapper {...props}>
      <IconBack color={theme.palette.accent.tertiary} />
    </Wrapper>
  )
}

const Wrapper = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
`
