import { PaymentsConnector } from "../../../screens/payments"
import { PaymentsScreenProps } from "../types"

export const PaymentsScreen = ({ navigation, route }: PaymentsScreenProps) => {
    return (
        <PaymentsConnector></PaymentsConnector>
    )
}