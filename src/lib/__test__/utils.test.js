/* eslint-disable no-undef */
import { cyclicNormalization } from '../utils'

describe('cyclicNormalization', () => {
  it('should normalize positive values within range', () => {
    expect(cyclicNormalization(5, 23)).toBe(5)
    expect(cyclicNormalization(23, 23)).toBe(23)
    expect(cyclicNormalization(24, 23)).toBe(0)
    expect(cyclicNormalization(45, 23)).toBe(21)
  })

  it('should normalize negative values within range', () => {
    expect(cyclicNormalization(-5, 23)).toBe(19)
    expect(cyclicNormalization(-8, 23)).toBe(16)
  })
})
