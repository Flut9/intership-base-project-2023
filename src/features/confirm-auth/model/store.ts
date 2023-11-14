import { createEvent, createStore } from "effector"

export const $guestToken = createStore<string>("")

export const setGuestToken = createEvent<string>()

$guestToken.on(setGuestToken, (_, payload) => payload)