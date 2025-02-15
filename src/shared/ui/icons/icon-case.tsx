import React from 'react'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconCase = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={2.75}
        y={2.75}
        width={18.5}
        height={18.5}
        rx={3.25}
        stroke="white"
        strokeWidth={1.5}
      />
      <Path
        d="M6 22C6 21.4477 6.44772 21 7 21C7.55228 21 8 21.4477 8 22V23C8 23.5523 7.55228 24 7 24C6.44772 24 6 23.5523 6 23V22Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Path
        d="M16 22C16 21.4477 16.4477 21 17 21C17.5523 21 18 21.4477 18 22V23C18 23.5523 17.5523 24 17 24C16.4477 24 16 23.5523 16 23V22Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Circle cx={12} cy={12} r={3.5} stroke="white" />
    </Svg>
  )
}
