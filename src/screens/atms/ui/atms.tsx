import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ATMs = () => {
  return (
    <Wrapper>
      <Typography align="center">Банкоматы</Typography>
    </Wrapper>
  )
}
