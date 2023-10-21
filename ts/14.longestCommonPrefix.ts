export function longestCommonPrefix(strs: string[]): string {
  const len = Math.min(...strs.map((it) => it.length));
  if (len === 0) return '';
  let i = 0;
  const str = strs.pop()!;
  while (i < len) {
    const char = str[i];
    const flag = strs.some((_str) => _str[i] !== char);
    if (flag) {
      break;
    }
    i++;
  }
  return str.substring(0, i);
}
