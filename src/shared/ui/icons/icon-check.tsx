import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconCheck = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.4569 8.45687L21.2801 8.2801C21.573 7.98723 21.573 7.51252 21.2801 7.21965C20.9872 6.92678 20.5125 6.92678 20.2197 7.21965L10.7499 16.6894L6.2801 12.2197C5.98723 11.9268 5.51252 11.9268 5.21965 12.2197C4.92678 12.5125 4.92678 12.9872 5.21965 13.2801L10.2199 18.2803C10.3622 18.423 10.5518 18.4999 10.7499 18.4999C10.9478 18.4999 11.1371 18.4231 11.2801 18.2801L21.2801 8.2801L21.4569 8.45687Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
