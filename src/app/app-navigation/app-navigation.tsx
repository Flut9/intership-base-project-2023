import { MainTabNavigator } from '@processes/routing'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

export const AppNavigation = () => {
  return (
    <Wrapper>
      <MainTabNavigator />
    </Wrapper>
  )
}
