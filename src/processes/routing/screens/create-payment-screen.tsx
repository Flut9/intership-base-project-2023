import { useEffect } from 'react'
import { styled } from '@shared/ui/theme'

import { CreatePaymentScreenProps } from '@processes/routing/types'

import { CreatePaymentConnector } from '@screens/create-payment'

import { BackButton } from '@shared/ui/atoms'

export const CreatePaymentScreen = ({
  navigation,
  route,
}: CreatePaymentScreenProps) => {
  const { selectedService } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: selectedService.service_name,
    })
  }, [navigation, selectedService])

  return (
    <Wrapper>
      <CreatePaymentConnector selectedService={selectedService} />
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
