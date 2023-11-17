import { postOtpCode } from "@shared/api/otp"
import { useMutation } from "@tanstack/react-query"
import { useStore } from "effector-react"
import { useCallback, useEffect, useState } from "react"
import { $enteredOtpCode, $otpCode } from "../model"

export const useOtp = () => {
    const enteredOtpCode = useStore($enteredOtpCode)
    const [attemptsCount, setAttemptsCount] = useState(0)
    const otpCode = useStore($otpCode)
    const [isOtpValid, setOtpValid] = useState(true)
    const { isPending, mutate } = useMutation({
        mutationFn: postOtpCode
    })

    const validate = useCallback((enteredOtpCode: string) => {
        const isValid = enteredOtpCode === otpCode

        setOtpValid(isValid)
        setAttemptsCount(prev => ++prev)

        return isValid
    }, [otpCode, setOtpValid, attemptsCount, setAttemptsCount])

    return {
        getOtpCode: mutate,
        isOtpValid,
        validate,
        attemptsCount,
        isLoading: isPending
    }
}