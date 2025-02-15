import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconArrowSwipe = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.4398 9.06741C22.8169 8.89601 23.2616 9.06275 23.433 9.43983C23.6044 9.81692 23.4376 10.2616 23.0605 10.433L11.7502 15.574L0.439831 10.433C0.0627452 10.2616 -0.103994 9.81692 0.0674087 9.43983C0.238811 9.06275 0.68345 8.89601 1.06054 9.06741L11.7502 13.9263L22.4398 9.06741Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
