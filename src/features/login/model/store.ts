import { storageAdapter } from "@shared/lib"
import { createEvent, createStore } from "effector"
import { persist } from "effector-storage"

export const $accessToken = createStore<string>("")
export const $refreshToken = createStore<string>("")
export const $isAuth = createStore<boolean>(false)

export const setAccessToken = createEvent<string>()
export const setRefreshToken = createEvent<string>()
export const setAuth = createEvent<boolean>()

$accessToken.on(setAccessToken, (_, payload) => payload)
$refreshToken.on(setRefreshToken, (_, payload) => payload)
$isAuth.on(setAuth, (_, payload) => payload)

persist({
    store: $accessToken,
    adapter: storageAdapter,
    key: "accessToken"
})
persist({
    store: $refreshToken,
    adapter: storageAdapter,
    key: "refreshToken"
})
persist({
    store: $isAuth,
    adapter: storageAdapter,
    key: "isAuth"
})