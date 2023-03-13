export function filterMessage(
  v: any,
  keys: string[] = ['message', 'msg', 'errorMsg'],
): string {
  if (v === null) return ''
  if (typeof v !== 'object') return `${v}`

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    if (v[key] !== undefined) return v[key]
  }

  return JSON.stringify(v)
}
