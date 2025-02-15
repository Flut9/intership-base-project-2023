import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconAddPlus = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C11.5858 4 11.25 4.33579 11.25 4.75V11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H11.25V19.25C11.25 19.6642 11.5858 20 12 20C12.4142 20 12.75 19.6642 12.75 19.25V12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H12.75V4.75C12.75 4.33579 12.4142 4 12 4Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
