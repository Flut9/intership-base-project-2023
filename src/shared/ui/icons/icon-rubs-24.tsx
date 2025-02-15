import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconRubs24 = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 4H9C8.58579 4 8.25 4.33579 8.25 4.75V11.5H6.75C6.33579 11.5 6 11.8358 6 12.25C6 12.6642 6.33579 13 6.75 13H8.25V15H6.75C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5H8.25V19.25C8.25 19.6642 8.58579 20 9 20C9.41421 20 9.75 19.6642 9.75 19.25V16.5H11.25C11.6642 16.5 12 16.1642 12 15.75C12 15.3358 11.6642 15 11.25 15H9.75V13H13.5C15.9853 13 18 10.9853 18 8.5C18 6.01472 15.9853 4 13.5 4ZM9.75 11.5V5.5H13.5C15.1569 5.5 16.5 6.84315 16.5 8.5C16.5 10.1569 15.1569 11.5 13.5 11.5H9.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
