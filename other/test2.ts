const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
type D = 'A' | 'S' | 'W' | 'D';
rl.on('line', function (line: string) {
  const tokens = line.split(';');
  let point = [0, 0];
  tokens.forEach((token) => {
    if (/^[ASWD]\d$/.test(token)) {
      const d = token.substring(0, 1) as D;
      const step = +token.substring(1);
      switch (d) {
        case 'A':
          point[0] -= step;
          break;
        case 'D':
          point[0] += step;
          break;
        case 'W':
          point[1] += step;
          break;
        default:
          break;
      }
    }
  });
});
10;
