import { createStore, createEvent } from "effector"

export const $otpId = createStore<string>("")
export const $otpCode = createStore<string>("")
export const $enteredOtpCode = createStore<string>("")

export const setOtpId = createEvent<string>()
export const setOtpCode = createEvent<string>()
export const setEnteredOtpCode = createEvent<string>()

$otpId.on(setOtpId, (_, payload) => payload)
$otpCode.on(setOtpCode, (_, payload) => payload)
$enteredOtpCode.on(setEnteredOtpCode, (_, payload) => payload)