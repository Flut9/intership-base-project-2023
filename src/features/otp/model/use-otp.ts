import { postOtpCode } from "@shared/api/otp"
import { useMutation } from "@tanstack/react-query"

export const useOtp = () => {
    const { mutate } = useMutation({
        mutationFn: postOtpCode
    })

    return {
        getOtpCode: mutate
    }
}