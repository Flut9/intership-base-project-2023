import { createEvent, createStore } from "effector"

export const $guestToken = createStore<string>("")

export const setGuestToken = createEvent<string>()
export const resetGuestToken = createEvent()

$guestToken.on(setGuestToken, (_, payload) => payload)
$guestToken.reset(resetGuestToken)