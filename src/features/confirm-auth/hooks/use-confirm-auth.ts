import { postConfirmAuth } from "@shared/api/confirm-auth"
import { useMutation } from "@tanstack/react-query"

export const useConfirmAuth = () => {
    const {
        data,
        mutate,
        isPending
    } = useMutation({
        mutationFn: postConfirmAuth
    })

    return {
        confirmAuthData: data,
        postConfirmAuth: mutate,
        isLoading: isPending
    }
}