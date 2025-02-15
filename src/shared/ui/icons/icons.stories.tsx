import React from 'react'
import { ScrollView } from 'react-native'

import { useTheme } from '@shared/hooks'
import { styled } from '@shared/ui/theme'

import { Typography } from '../atoms/typography'
import * as icons from './index'

const ListWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const IconWrapper = styled.View`
  width: 25%;
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  align-items: center;
`
const IconName = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

type IconNames = keyof typeof icons

const Meta = {
  title: 'ui',
}

export default Meta

export const Icons = () => {
  const theme = useTheme()
  return (
    <ScrollView>
      <ListWrapper>
        {(Object.keys(icons) as IconNames[]).map((iconName) => {
          const CurrentIcon = icons[iconName]
          return (
            <IconWrapper key={iconName}>
              <CurrentIcon color={theme.palette.text.primary} />
              <IconName variant="caption1">{iconName}</IconName>
            </IconWrapper>
          )
        })}
      </ListWrapper>
    </ScrollView>
  )
}
