import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconBank = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.40139L5.5 7.44903V14.25C5.5 14.6642 5.16421 15 4.75 15C4.33579 15 4 14.6642 4 14.25V8.25008C3.75788 8.24986 3.52035 8.1326 3.37596 7.91603C3.1462 7.57138 3.23933 7.10573 3.58397 6.87596L11.584 1.87596C11.8359 1.70801 12.1641 1.70801 12.416 1.87596L20.416 6.87596C20.7607 7.10573 20.8538 7.57138 20.624 7.91603C20.4797 8.1326 20.2421 8.24986 20 8.25008V14.25C20 14.6642 19.6642 15 19.25 15C18.8358 15 18.5 14.6642 18.5 14.25V7.44903L12 3.40139ZM3.75 16.5C3.33579 16.5 3 16.8358 3 17.25C3 17.6642 3.33579 18 3.75 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H3.75ZM2.75 19.5C2.33579 19.5 2 19.8358 2 20.25C2 20.6642 2.33579 21 2.75 21H21.25C21.6642 21 22 20.6642 22 20.25C22 19.8358 21.6642 19.5 21.25 19.5H2.75ZM8.25 10.5C7.83579 10.5 7.5 10.8358 7.5 11.25V14.25C7.5 14.6642 7.83579 15 8.25 15C8.66421 15 9 14.6642 9 14.25V11.25C9 10.8358 8.66421 10.5 8.25 10.5ZM11.25 11.25C11.25 10.8358 11.5858 10.5 12 10.5C12.4142 10.5 12.75 10.8358 12.75 11.25V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V11.25ZM15.75 10.5C15.3358 10.5 15 10.8358 15 11.25V14.25C15 14.6642 15.3358 15 15.75 15C16.1642 15 16.5 14.6642 16.5 14.25V11.25C16.5 10.8358 16.1642 10.5 15.75 10.5Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
