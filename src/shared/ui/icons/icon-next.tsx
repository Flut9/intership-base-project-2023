import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconNext = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6894 8.24828C14.4143 7.93869 14.4421 7.46464 14.7517 7.18945C15.0613 6.91426 15.5354 6.94215 15.8106 7.25174L19.8042 11.7446C19.8547 11.7998 19.8955 11.8609 19.9265 11.9258C20.0252 12.1314 20.0238 12.371 19.9265 12.5742C19.8955 12.6391 19.8547 12.7002 19.8042 12.7554L15.8106 17.2483C15.5354 17.5579 15.0613 17.5858 14.7517 17.3106C14.4421 17.0354 14.4143 16.5613 14.6894 16.2517L17.5799 13H4.75C4.33579 13 4 12.6642 4 12.25C4 11.8358 4.33579 11.5 4.75 11.5H17.5799L14.6894 8.24828Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
