/**
 * pure js function as tools
*/

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

/**
 * @description handle number with in [0, 23]
 * @unitest ./__test__/utils.test.js
 * @returns
 */
export function cyclicNormalization(
  value: number,
  rangeMax = 23
) {
  let normalizedValue = value % (rangeMax + 1)

  if (normalizedValue < 0) {
    normalizedValue += (rangeMax + 1)
  }

  return normalizedValue
}

export function replaceTimeZoneToNum(timeZone: string) {
  return parseInt(timeZone.replace(/[A-Za-z]/g, ''))
}
