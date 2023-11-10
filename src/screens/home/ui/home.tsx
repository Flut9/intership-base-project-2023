import { styled } from '@shared/ui/theme'

import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Home = () => {
  return (
    <Wrapper>
      <Typography align="center">Главная</Typography>
    </Wrapper>
  )
}
