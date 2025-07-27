import { formatPriceGBP } from './price'

describe('formatPriceGBP', () => {
  it('formats 0 pennies as £0.00', () => {
    expect(formatPriceGBP(0)).toBe('£0.00')
  })

  it('formats 1 penny as £0.01', () => {
    expect(formatPriceGBP(1)).toBe('£0.01')
  })

  it('formats 100 pennies as £1.00', () => {
    expect(formatPriceGBP(100)).toBe('£1.00')
  })

  it('formats 12345 pennies as £123.45', () => {
    expect(formatPriceGBP(12345)).toBe('£123.45')
  })

  it('formats large numbers with commas', () => {
    expect(formatPriceGBP(123456789)).toBe('£1,234,567.89')
  })

  it('formats negative values correctly', () => {
    expect(formatPriceGBP(-250)).toBe('-£2.50')
  })

  it('formats fractional pennies correctly', () => {
    expect(formatPriceGBP(199)).toBe('£1.99')
  })
})
