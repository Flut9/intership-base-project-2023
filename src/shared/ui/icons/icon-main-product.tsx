import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconMainProduct = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6063 7.11073L20.6667 7.15642C21.7626 7.54378 22.5 8.58166 22.5 9.75V17.75C22.5 19.2688 21.2688 20.5 19.75 20.5H3.75C2.23122 20.5 1 19.2688 1 17.75V5.75C1 4.23122 2.23122 3 3.75 3H19.75C20.1642 3 20.5 3.33579 20.5 3.75V6.92071L20.6063 7.11073ZM18.9634 6.83839L19 6.75V4.75L18.8384 4.53661L3.75 4.5C3.05964 4.5 2.5 5.05964 2.5 5.75V6.75L2.66161 6.96339L18.75 7L18.9634 6.83839ZM2.5 8.75L2.53661 8.66161L2.75 8.5H19.75C20.4404 8.5 21 9.05964 21 9.75V17.75C21 18.4404 20.4404 19 19.75 19H3.75C3.05964 19 2.5 18.4404 2.5 17.75V8.75ZM18.5 13.75C18.5 14.4404 17.9404 15 17.25 15C16.5596 15 16 14.4404 16 13.75C16 13.0596 16.5596 12.5 17.25 12.5C17.9404 12.5 18.5 13.0596 18.5 13.75Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
