import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconRadioOk = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.83333 12C2.83333 17.0626 6.93739 21.1667 12 21.1667C17.0626 21.1667 21.1667 17.0626 21.1667 12C21.1667 6.93739 17.0626 2.83333 12 2.83333C6.93739 2.83333 2.83333 6.93739 2.83333 12ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17.8334C8.77836 17.8334 6.16669 15.2217 6.16669 12.0001C6.16669 8.77842 8.77836 6.16675 12 6.16675C15.2217 6.16675 17.8334 8.77842 17.8334 12.0001C17.8334 15.2217 15.2217 17.8334 12 17.8334Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
