/**
 * pure js function as tools
*/

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

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
