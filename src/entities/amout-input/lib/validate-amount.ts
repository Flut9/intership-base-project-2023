export const validateAmount = (amount: number) => {
  return amount > 0 && amount <= 20000
}
