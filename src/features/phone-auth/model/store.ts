import { createStore, createEvent } from "effector"

export const $authPhone = createStore<string>("")

export const setAuthPhone = createEvent<string>()
export const resetAuthPhone = createEvent()

$authPhone.on(setAuthPhone, (_, payload) => payload)
$authPhone.reset(resetAuthPhone)