import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconBankomat = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21C22.6569 3 24 4.34315 24 6C24 7.30622 23.1652 8.41746 22 8.82929V7.11805C22.3069 6.84339 22.5 6.44425 22.5 6C22.5 5.17157 21.8284 4.5 21 4.5H3C2.17157 4.5 1.5 5.17157 1.5 6C1.5 6.44425 1.69313 6.84339 2 7.11805V8.82929C0.834808 8.41746 0 7.30622 0 6C0 4.34315 1.34315 3 3 3Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 4L3.75 19.75C3.75 21.8211 5.42893 23.5 7.5 23.5H16.5C18.5711 23.5 20.25 21.8211 20.25 19.75V4H18.75V19.75C18.75 20.9926 17.7426 22 16.5 22H7.5C6.25736 22 5.25 20.9926 5.25 19.75L5.25 4H3.75ZM7.75 6.25L7.75 18.75C7.75 19.1642 8.08579 19.5 8.5 19.5C8.91421 19.5 9.25 19.1642 9.25 18.75V6.25C9.25 5.83579 8.91421 5.5 8.5 5.5C8.08579 5.5 7.75 5.83579 7.75 6.25ZM11.75 18.75V13.25C11.75 12.8358 12.0858 12.5 12.5 12.5C12.9142 12.5 13.25 12.8358 13.25 13.25V18.75C13.25 19.1642 12.9142 19.5 12.5 19.5C12.0858 19.5 11.75 19.1642 11.75 18.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
