import { useMemo, useState } from "react"
import { validatePasswordCharacters, validatePasswordLength } from "../lib"

export const usePassword = (initialValue: string) => {
    const [password, setPassword] = useState(initialValue)

    const isLengthValid = useMemo(() => validatePasswordLength(password), [password])
    const isCharactersValid = useMemo(() => validatePasswordCharacters(password), [password])

    return {
        password,
        isLengthValid,
        isCharactersValid,
        setPassword
    }
}