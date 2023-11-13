import { PaymentServiceUI } from '@shared/api/payment-categories'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

type Props = {
  service: PaymentServiceUI
}

export const PaymentServiceRow = ({ service }: Props) => {
  return (
    <Container>
      <IconContainer>
        <Icon source={{ uri: service.icon }} />
      </IconContainer>
      <TitleTypography variant="body15Regular">{service.name}</TitleTypography>
    </Container>
  )
}

const Container = styled.View`
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.palette.content.secondary};
`

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`

const Icon = styled.Image`
  width: 100%;
  height: 100%;
`

const TitleTypography = styled(Typography)`
  margin-left: 16px;
`
