// console.log(letterCombinations('23'));
function letterCombinations(str: string): Array<string> {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  if (!str.length) return [];

  const result: Array<string> = [];
  run(str, '');
  return result;

  function run(str: string, one: string) {
    if (str === '') {
      result.push(one);
      return;
    }
    const key = str[0];
    const newStr = str.substring(1);
    map[key].forEach((char) => {
      run(newStr, one + char);
    });
  }
}
