import { styled } from "@shared/ui/theme"
import { PhoneAuthScreenProps } from "../types"
import { PhoneAuthConnector } from "@screens/phone-auth"

export const PhoneAuthScreen = ({ navigation, route }: PhoneAuthScreenProps) => {
    return (
        <Wrapper>
            <PhoneAuthConnector />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`