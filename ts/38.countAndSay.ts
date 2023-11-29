export function countAndSay(n: number): string {
  if (n === 1) return '1';

  let str = '1';
  for (let i = 2; i <= n; i++) {
    str = step(str).join('');
  }
  return str;
  function step(str: string) {
    // if (n == 1) return [1];
    // if(n === 2) return [1, 1]
    const result: number[] = [];
    let last: string = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (last === '') {
        last = str[i];
        count = 1;
      } else if (str[i] === last) {
        ++count;
      } else {
        result.push(count, +last);
        count = 1;
        last = str[i];
      }
    }
    // i === str.length -1
    if (count) {
      result.push(count, +last);
    }
    return result;
  }
}
