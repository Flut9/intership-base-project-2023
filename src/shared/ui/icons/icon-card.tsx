import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconCard = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 16.25V7.25C1.25 5.17893 2.92893 3.5 5 3.5H19C21.0711 3.5 22.75 5.17893 22.75 7.25V16.25C22.75 18.3211 21.0711 20 19 20H5C2.92893 20 1.25 18.3211 1.25 16.25ZM5 18.5H19C20.2426 18.5 21.25 17.4926 21.25 16.25V7.25C21.25 6.00736 20.2426 5 19 5H5C3.75736 5 2.75 6.00736 2.75 7.25V16.25C2.75 17.4926 3.75736 18.5 5 18.5ZM18.25 8.25H5.75C5.33579 8.25 5 8.58579 5 9C5 9.41421 5.33579 9.75 5.75 9.75H18.25C18.6642 9.75 19 9.41421 19 9C19 8.58579 18.6642 8.25 18.25 8.25Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
