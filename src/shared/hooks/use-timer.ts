import { useEffect, useState } from "react"

export const useTimer = (durationInSeconds: number, stepInSeconds: number) => {
    const [timeLeft, setTimeLeft] = useState(0)
    const [isTimeExpired, setTimeExpired] = useState(false)

    useEffect(() => {
        if (isTimeExpired) {
            return
        }

        if (timeLeft === durationInSeconds) {
            setTimeExpired(true)
            return
        }

        setTimeout(() => {
            setTimeLeft(prev => ++prev)
        }, stepInSeconds * 1000)
    }, [timeLeft, setTimeLeft, durationInSeconds, stepInSeconds, setTimeExpired, isTimeExpired])

    return {
        timeLeft,
        isTimeExpired
    }
}