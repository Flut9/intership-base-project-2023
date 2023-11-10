import { PressableProps } from 'react-native/types'
import { styled } from '@shared/ui/theme'

import { useTheme } from '@shared/hooks'
import { IconClose } from '@shared/ui/icons'

type Props = PressableProps & {
  size: number
  buttonStyle?: ClearButtonStyle
}

type ClearButtonStyle = 'default' | 'background'

export const ClearButton = ({
  size,
  buttonStyle = 'default',
  ...props
}: Props) => {
  const theme = useTheme()

  return (
    <Wrapper buttonStyle={buttonStyle} {...props}>
      <IconClose size={size} color={theme.palette.text.tertiary} />
    </Wrapper>
  )
}

const Wrapper = styled.Pressable<{ buttonStyle: ClearButtonStyle }>`
  padding: 2px;
  border-radius: 8px;
  background-color: ${({ theme, buttonStyle }) => {
    return buttonStyle === 'background'
      ? theme.palette.text.secondary
      : 'transparent'
  }};
  justify-content: center;
  align-items: center;
`
