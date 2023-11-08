import { MainTabNavigator } from '@processes/routing'

import { Snack } from '@app/snack'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const AppNavigation = () => {
  return (
    <Wrapper>
      <Snack />
      <MainTabNavigator />
    </Wrapper>
  )
}
