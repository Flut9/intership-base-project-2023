const MIN_PASSWORD_LENGTH = 5

export const validatePasswordLength = (password: string): boolean => password.length >= MIN_PASSWORD_LENGTH