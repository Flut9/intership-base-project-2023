import { TextInputProps } from 'react-native/types'
import styled from 'styled-components/native'

import { useTheme } from '@shared/hooks'

type Props = TextInputProps

export const Input = (props: Props) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <TextInput
        placeholderTextColor={theme.palette.text.tertiary}
        {...props}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
`

const TextInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: ${({ theme }) => theme.palette.text.primary};
`
