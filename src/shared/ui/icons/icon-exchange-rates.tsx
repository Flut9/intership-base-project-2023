import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconExchangeRates = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 3C9.75 2.58579 10.0858 2.25 10.5 2.25H14C14.4142 2.25 14.75 2.58579 14.75 3V21C14.75 21.4142 14.4142 21.75 14 21.75H10.5C10.0858 21.75 9.75 21.4142 9.75 21V3ZM2.25 13C2.25 12.5858 2.58579 12.25 3 12.25H6.5C6.91421 12.25 7.25 12.5858 7.25 13V21C7.25 21.4142 6.91421 21.75 6.5 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V13ZM3.75 13.75H5.75V20.25H3.75V13.75ZM13.25 3.75H11.25V20.25H13.25V3.75ZM18 7.25C17.5858 7.25 17.25 7.58579 17.25 8V21C17.25 21.4142 17.5858 21.75 18 21.75H21.5C21.9142 21.75 22.25 21.4142 22.25 21V8C22.25 7.58579 21.9142 7.25 21.5 7.25H18ZM20.75 8.75H18.75V20.25H20.75V8.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
