import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'

export const IconBankAccount = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2143 3H7.35714C6.05533 3 5 4.08805 5 5.43023V19.5698C5 20.9119 6.05533 22 7.35714 22H17.6429C18.9447 22 20 20.9119 20 19.5698V8.96512C20 8.78933 19.9323 8.62075 19.8117 8.49645L14.6689 3.19413C14.5483 3.06983 14.3848 3 14.2143 3ZM18.7143 19.5698V9.62789H14.2143C13.8592 9.62789 13.5714 9.33115 13.5714 8.9651V4.32556H7.35713C6.7654 4.32556 6.28571 4.82013 6.28571 5.43022V19.5698C6.28571 20.1798 6.7654 20.6744 7.35713 20.6744H17.6428C18.2346 20.6744 18.7143 20.1798 18.7143 19.5698ZM17.8051 8.30238L14.8571 5.26296V8.30238H17.8051ZM9.07145 12.7209H15.9286C16.2836 12.7209 16.5714 13.0177 16.5714 13.3837C16.5714 13.7498 16.2836 14.0465 15.9286 14.0465H9.07145C8.71641 14.0465 8.42859 13.7498 8.42859 13.3837C8.42859 13.0177 8.71641 12.7209 9.07145 12.7209ZM15.9286 16.2558H9.07145C8.71641 16.2558 8.42859 16.5526 8.42859 16.9186C8.42859 17.2847 8.71641 17.5814 9.07145 17.5814H15.9286C16.2836 17.5814 16.5714 17.2847 16.5714 16.9186C16.5714 16.5526 16.2836 16.2558 15.9286 16.2558ZM9.07145 9.18606H10.7857C11.1408 9.18606 11.4286 9.4828 11.4286 9.84885C11.4286 10.2149 11.1408 10.5116 10.7857 10.5116H9.07145C8.71641 10.5116 8.42859 10.2149 8.42859 9.84885C8.42859 9.4828 8.71641 9.18606 9.07145 9.18606Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
