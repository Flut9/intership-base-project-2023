import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconLock1 = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 7.25C17.75 4.07436 15.1756 1.5 12 1.5C8.82436 1.5 6.25 4.07436 6.25 7.25V8.47979C4.33425 9.33973 3 11.2641 3 13.5V17C3 20.0376 5.46243 22.5 8.5 22.5H15.5C18.5376 22.5 21 20.0376 21 17V13.5C21 11.2641 19.6658 9.33973 17.75 8.47979V7.25ZM15.5 8C15.7544 8 16.0048 8.01727 16.25 8.05071V7.25C16.25 4.90279 14.3472 3 12 3C9.65279 3 7.75 4.90279 7.75 7.25V8.05071C7.99523 8.01727 8.2456 8 8.5 8H15.5ZM4.5 13.5C4.5 11.2909 6.29086 9.5 8.5 9.5H15.5C17.7091 9.5 19.5 11.2909 19.5 13.5V17C19.5 19.2091 17.7091 21 15.5 21H8.5C6.29086 21 4.5 19.2091 4.5 17V13.5Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
