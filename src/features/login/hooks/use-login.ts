import { postLogin } from "@shared/api/login"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    const { 
        mutate 
    } = useMutation({
        mutationFn: postLogin
    })

    return {
        postLogin: mutate
    }
}