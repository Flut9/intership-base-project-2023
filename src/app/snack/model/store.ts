import { createEvent, createStore } from "effector"

type SnackData = {
    message: string,
    durationToHide: number
}

export const $snacks = createStore<SnackData[]>([])

export const addSnack = createEvent<SnackData>()
export const removeShowedSnack = createEvent()

$snacks.on(addSnack, (state, payload) => {
    if (state.find(snackData => snackData.message === payload.message)) {
        return [...state]
    }

    return [...state, payload]
})
$snacks.on(removeShowedSnack, (state, _) => state.filter((_, index) => index !== 0))