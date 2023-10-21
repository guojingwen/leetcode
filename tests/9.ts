function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let str = '' + x;
  return str === [...str].reverse().join('');
}
