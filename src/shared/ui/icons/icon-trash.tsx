import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconTrash = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.75 5.25V4C16.75 2.48122 15.5188 1.25 14 1.25H10C8.48122 1.25 7.25 2.48122 7.25 4V5.25H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H4.25V20C4.25 21.5188 5.48122 22.75 7 22.75H17C18.5188 22.75 19.75 21.5188 19.75 20V6.75H21C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25H16.75ZM15.25 5.25H8.75V4C8.75 3.30964 9.30964 2.75 10 2.75H14C14.6904 2.75 15.25 3.30964 15.25 4V5.25ZM18.25 20V6.75H5.75V20C5.75 20.6904 6.30964 21.25 7 21.25H17C17.6904 21.25 18.25 20.6904 18.25 20ZM9.25 11V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V11C10.75 10.5858 10.4142 10.25 10 10.25C9.58579 10.25 9.25 10.5858 9.25 11ZM13.25 17V11C13.25 10.5858 13.5858 10.25 14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V17C14.75 17.4142 14.4142 17.75 14 17.75C13.5858 17.75 13.25 17.4142 13.25 17Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
