import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconBack = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.81066 12.75H21C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25H4.81066L10.5303 5.53033C10.8232 5.23744 10.8232 4.76256 10.5303 4.46967C10.2374 4.17678 9.76256 4.17678 9.46967 4.46967L2.46967 11.4697C2.17678 11.7626 2.17678 12.2374 2.46967 12.5303L9.46967 19.5303C9.76256 19.8232 10.2374 19.8232 10.5303 19.5303C10.8232 19.2374 10.8232 18.7626 10.5303 18.4697L4.81066 12.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
