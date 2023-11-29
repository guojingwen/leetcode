function multiply(num1: string, num2: string): string {
  if ([num1, num2].includes('0')) return '0';
  const arr: string[] = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    const chars = [...String(+num2[i] * +num1)];
    chars.reverse();
    arr.push(
      Array.from({ length: num2.length - 1 - i }, () => 0).join('') +
        chars.join('')
    );
  }
  // console.log(arr);
  // if (arr.length === 1) {
  //   const res = [...arr[0]];
  //   res.reverse();
  //   return res.join('');
  // }
  let result: number[] = [];
  let next = 0;
  const maxLen = num1.length + num2.length;
  for (let i = 0; i < maxLen; i++) {
    const val = arr.reduce((sum, it) => {
      const char = it[i] || '0';
      return sum + Number(char);
    }, next);
    result.push(val % 10);
    next = Math.floor(val / 10);
  }
  result.reverse();
  return +result.join('') + '';
}

/**
 * 大整数相乘 思路
 * 1. 检查输入的合法性（非空， 无非法字符串）
 * 2. 检查输入是否可以简单运算（一个数为0、-1、1、+1）
 * 3. 去掉最前面可能有的正负符号，并判断输出的正负
 * 4. 将输入的值分四段一截，（分的太短性能太差，分的太长可能造成精度丢失）
 * 5. 遍历相乘得到最终数组（递归）
 * 6. 遍历最终数组，拼接最终的数
 * 7. 将正负符号与最终的数拼接输出
 */

function multiply(str1, str2) {
  // 1. 检查输入的合法性（非空， 无非法字符串）
  if (typeof str1 !== 'string' || Number.isNaN(+str1)) {
    throw new Error(
      'params 1  must String and can transform to Number'
    );
  }
  if (typeof str2 !== 'string' || Number.isNaN(+str2)) {
    throw new Error(
      'params 2  must String and can transform to Number'
    );
  }
  // console.log(BigInt(str1) * BigInt(str2));

  // 2. 检查输入是否可以简单运算（一个数为0、-1、1、+1）
  if (['0', '-1', '+1', '1'].includes(str1)) {
    if (str1 === '0') return '0';
    if (str1 === '-1') {
      str2 = str2.replace(/^-/, '');
    }
    str2 = str2.replace(/^\+/, '');
    return str2;
  }
  if (['0', '-1', '+1', '1'].includes(str2)) {
    if (str2 === '0') return '0';
    if (str2 === '-1') {
      str1 = str1.replace(/^-/, '');
    }
    str1 = str1.replace(/^\+/, '');
    return str1;
  }
  // console.log(sign || '+', str1, str2)

  // 3. 判断输出的正负
  const sign = getSymbol();
  function getSymbol() {
    const sign1 = /^[-+]/.test(str1);
    const sign2 = /^[-+]/.test(str2);
    let symbol = '';
    let symbol1 = '';
    let symbol2 = '';
    if (sign1) {
      symbol1 = str1.substr(0, 1);
      str1 = str1.substr(1);
      if (symbol1 === '+') symbol1 = '';
    }
    if (sign2) {
      symbol2 = str2.substr(0, 1);
      str2 = str2.substr(1);
      if (symbol2 === '+') symbol2 = '';
    }
    if (symbol1 !== symbol2) {
      symbol = '-';
    }
    return symbol;
  }

  // 4. 将输入的值分四段一截
  const arr1 = getArr(str1);
  const arr2 = getArr(str2);
  function getArr(str) {
    return new Array(Math.ceil(str.length / 4))
      .fill('')
      .reduce((sum, item, index) => {
        const end = str.length - 4 * index;
        sum.push(str.substring(Math.max(end - 4, 0), end));
        return sum;
      }, []);
  }
  console.log(sign, arr1, arr2);

  // 5. 遍历相乘得到最终数组
  const finallyArr: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      updateFinallyArr(i + j, arr1[i] * arr2[j]);
    }
  }
  function updateFinallyArr(index, num) {
    const old = finallyArr[index];
    if (old) {
      num += old;
    }
    finallyArr[index] = num % 10000;
    if (num > 9999) {
      updateFinallyArr(index + 1, Math.floor(num / 10000));
    }
  }
  console.log(finallyArr);
  // 6. 遍历最终数组，拼接最终的数
  let finallyStr = finallyArr
    .map((item) => (item + '').padStart(4, '0'))
    .reverse()
    .join('');
  finallyStr = finallyStr.replace(/^0+/, '');
  // console.log(sign, finallyStr);

  return sign + finallyStr;
}

// console.log(multiply('123', '456'), 123 * 456);
// console.log(multiply('408', '5'), 408 * 5);
