export const formatPriceGBP = (pennies: number): string => {
  const pounds = pennies / 100
  return pounds.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
