import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconEdit = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5303 1.46967C16.2374 1.17678 15.7626 1.17678 15.4697 1.46967L4.46967 12.4697C4.32902 12.6103 4.25 12.8011 4.25 13V17C4.25 17.4142 4.58579 17.75 5 17.75H9C9.19891 17.75 9.38968 17.671 9.53033 17.5303L20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L16.5303 1.46967ZM16 3.06066L18.9393 6L8.76256 16.1768L8.58579 16.25H5.75V13.4142L5.82322 13.2374L16 3.06066ZM20 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22C4.25 21.5858 4.58579 21.25 5 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
