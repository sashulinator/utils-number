export function isNumber(input: unknown): input is number {
  if (typeof input === 'number' || input instanceof Number) {
    return !Number.isNaN(input)
  }
  return false
}
