import { formatPhonenumber } from "./phone-formatter"

describe("formatPhonenumber", () => {
    test("Test full phone", () => {
        expect(formatPhonenumber("1234567890")).toBe("+7 123 456 78 90")
    })

    test("Test empty phone", () => {
        expect(formatPhonenumber("")).toBe("+7 ")
    })

    test("Test a part of phone", () => {
        expect(formatPhonenumber("123456")).toBe("+7 123 456")
    })
})