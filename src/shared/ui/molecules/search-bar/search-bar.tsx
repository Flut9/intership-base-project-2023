import { useCallback } from 'react'
import { TextInputProps } from 'react-native/types'
import { styled } from '@shared/ui/theme'

import { useTheme } from '@shared/hooks'
import { ClearButton } from '@shared/ui/atoms'
import { Input } from '@shared/ui/atoms'
import { IconSearch } from '@shared/ui/icons'

type Props = TextInputProps

export const SearchBar = (props: Props) => {
  const onClearButtonClick = useCallback(() => {
    props.onChangeText?.('')
  }, [props])

  return (
    <Wrapper>
      <IconSearch />
      <StyledInput {...props} />

      {props.value && (
        <ClearButton
          buttonStyle="background"
          size={12}
          onPress={onClearButtonClick}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
`

const StyledInput = styled(Input)`
  margin-left: 4px;
  margin-right: 4px;
`
