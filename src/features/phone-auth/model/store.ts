import { createStore, createEvent } from "effector"

export const $authPhone = createStore<string>("")

export const setAuthPhone = createEvent<string>()

$authPhone.on(setAuthPhone, (_, payload) => payload)