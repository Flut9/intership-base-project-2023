import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconInput = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9394 8.24828C12.6643 7.93869 12.6921 7.46464 13.0017 7.18945C13.3113 6.91426 13.7854 6.94215 14.0606 7.25174L18.0542 11.7446C18.1047 11.7998 18.1455 11.8609 18.1765 11.9258C18.2752 12.1314 18.2738 12.371 18.1765 12.5742C18.1455 12.6391 18.1047 12.7002 18.0542 12.7554L14.0606 17.2483C13.7854 17.5579 13.3113 17.5858 13.0017 17.3106C12.6921 17.0354 12.6643 16.5613 12.9394 16.2517L15.8299 13H6.5C6.08579 13 5.75 12.6642 5.75 12.25V7.75C5.75 7.33579 6.08579 7 6.5 7C6.91421 7 7.25 7.33579 7.25 7.75V11.5H15.8299L12.9394 8.24828Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
