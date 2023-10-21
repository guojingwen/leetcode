console.log(isVaild('{([]})'));

function isVaild(str: string): boolean {
  const stack: string[] = [];
  const arr = [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ];
  const [map, lefts] = arr.reduce(
    (sum, it) => {
      const [l, r] = it;
      sum[0][r] = l;
      sum[1].push(l);
      return sum;
    },
    [{} as { [key: string]: string }, [] as string[]]
  );
  while (str) {
    const char = str[0];
    str = str.substring(1);
    if (lefts.includes(char)) {
      stack.push(char);
    } else if (!stack.length) {
      return false;
    } else if (stack.at(-1) === map[char]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
}
