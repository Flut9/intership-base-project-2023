import { createEvent, createStore } from "effector"

export const $snackMessage = createStore("")
export const $snackShowing = createStore(false)

export const changeSnackShowing = createEvent<boolean>()
export const changeSnackMessage = createEvent<string>()

$snackMessage.on(changeSnackMessage, (_, payload) => payload)
$snackShowing.on(changeSnackShowing, (_, payload) => payload)


