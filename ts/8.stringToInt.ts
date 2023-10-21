// console.log(myAtoi('.1'))
export function myAtoi(s: string): number {
  s = s.trim();
  let current = 0;
  let sign: '+' | '-' | null = null;
  let numStr = '';
  while (current < s.length) {
    const char = s[current++];
    if (/[\d]/.test(char)) {
      if (sign === null) {
        sign = '+';
      }
      numStr += char;
    } else if (['+', '-'].includes(char)) {
      if (sign === null) {
        sign = char as '+' | '-';
      } else {
        break;
      }
    } else {
      if (sign === null) {
        return 0;
      }
      break;
    }
  }
  const num = +`${sign || '+'}${numStr || 0}`;
  const min = -Math.pow(2, 31);
  if (num < min) {
    return min;
  }
  const max = Math.pow(2, 31) - 1;
  if (num > max) {
    return max;
  }
  return num;
}
/* function myAtoi(s) {
  let subStr= '';
  let hasSign = false;
  const newS = s.trimLeft();
  for(let i=0; i<newS.length; i++){
    if(['+', '-'].includes(newS[i])) {
      if(!hasSign) {
        subStr+=newS[i];
        hasSign = true;
        continue;
      }
      break
    }
    if(/\d/.test(newS[i])) {
      subStr+=newS[i];
      hasSign = true;
    } else if(hasSign){
      break;
    } else if(['.', ' '].includes(newS[i])) {
      break;
    } else {
      continue;
    }
  }
  const num = +subStr || 0;
  const min = -Math.pow(2, 31);
  if(num < min) {
    return min;
  }
  const max = Math.pow(2, 31) - 1;
  if(num > max) {
     return max;
  }
  return num;
}; */
