import { MainTabNavigator } from '@processes/routing'

import { Snack } from '@entities/snack'

import { styled } from '@shared/ui/theme'
import { AuthNavigator } from '@processes/routing/navigators'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const AppNavigation = () => {
  return (
    <Wrapper>
      <Snack />
      {/* <MainTabNavigator /> */}
      <AuthNavigator />
    </Wrapper>
  )
}
