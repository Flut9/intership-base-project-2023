import { AuthStackParams } from "@processes/routing/types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PhoneAuthScreen } from "@processes/routing/screens"
import { styled } from "@shared/ui/theme"

const AuthStack = createNativeStackNavigator<AuthStackParams>()

export const AuthNavigator = () => {
    return (
        <Wrapper>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AuthStack.Screen 
                    component={PhoneAuthScreen}
                    name={"PhoneAuth"}
                />
            </AuthStack.Navigator>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
` 