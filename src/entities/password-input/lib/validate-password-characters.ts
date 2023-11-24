export const validatePasswordCharacters = (password: string): boolean => {
    const regex = /^([0-9A-Za-z]{5,255})$/g
    return regex.test(password)
}