import { PaymentStatus } from './payment-status'

type Props = {
  amount: number
  isSucceeded: boolean
  onDoneButtonClick: () => void
}

export const PaymentStatusConnector = ({
  amount,
  isSucceeded,
  onDoneButtonClick,
}: Props) => {
  return (
    <PaymentStatus
      amount={amount}
      isSucceeded={isSucceeded}
      onDoneButtonClick={onDoneButtonClick}
    />
  )
}
