import { MainTabNavigator } from '@processes/routing'

import { Snack } from '@entities/snack'

import { styled } from '@shared/ui/theme'
import { AuthNavigator } from '@processes/routing/navigators'
import { useStore } from 'effector-react'
import { $isAuth } from '@features/login'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const AppNavigation = () => {
  const isAuth = useStore($isAuth)

  return (
    <Wrapper>
      <Snack />
      {isAuth 
        ? <MainTabNavigator />
        : <AuthNavigator />
      }
    </Wrapper>
  )
}
