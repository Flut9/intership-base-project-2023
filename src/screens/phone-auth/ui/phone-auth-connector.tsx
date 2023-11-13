import { Keyboard } from "@shared/ui/organisms"
import { PhoneAuth } from "./phone-auth"
import { styled } from "@shared/ui/theme"
import { useCallback } from "react"
import { TKeyboardButton } from "@shared/types"

export const PhoneAuthConnector = () => {
    const onKeyPress = useCallback((keyboardButton: TKeyboardButton) => {
        console.log(keyboardButton)
    }, [])  

    return (
        <Wrapper>
            <PhoneAuthWrapper>
                <PhoneAuth />
            </PhoneAuthWrapper>
            <Keyboard
                buttonList={[
                    [{ value: "1" }, { value: "2" }, { value: "3" }],
                    [{ value: "4" }, { value: "5" }, { value: "6" }],
                    [{ value: "7" }, { value: "8" }, { value: "9" }],
                    [{ value: "Отмена", type: "cancel" }, { value: "0" }, { type: "delete" }]
                ]}
                onKeyPress={onKeyPress}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
`

const PhoneAuthWrapper = styled.SafeAreaView`
    flex: 1;
`