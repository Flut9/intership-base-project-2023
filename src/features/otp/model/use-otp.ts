import { postOtpCode } from "@shared/api/otp"
import { useMutation } from "@tanstack/react-query"

export const useOtp = () => {
    const { isPending, mutate } = useMutation({
        mutationFn: postOtpCode
    })

    return {
        getOtpCode: mutate,
        isLoading: isPending
    }
}