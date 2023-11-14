import { TextInput, TextInputProps } from 'react-native/types'

import { useTheme } from '@shared/hooks'
import { styled } from '@shared/ui/theme'
import { forwardRef, Ref } from 'react'

type Props = TextInputProps

export const Input = forwardRef((props: Props, ref: Ref<TextInput>) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <StyledTextInput
        ref={ref}
        placeholderTextColor={theme.palette.text.tertiary}
        {...props}
      />
    </Wrapper>
  )
})

const Wrapper = styled.View`
  flex: 1;
`

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: ${({ theme }) => theme.palette.text.primary};
`
