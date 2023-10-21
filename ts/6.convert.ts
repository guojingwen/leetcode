// s = "PAYPALISHIRING", numRows = 3
// P   A   H   N
// A P L S I I G
// Y   I   R

// s = "PAYPALISHIRING", numRows = 4
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const matrix = Array.from({ length: numRows }, () => [] as string[]);
  let i = 0,
    flag = 1,
    j = 0,
    index = 0;
  for (let index = 0; index < s.length; index++) {
    matrix[i][j] = s[index];
    if (flag === 1) {
      if (i === numRows - 1) {
        flag = -1;
        j++;
      }
      i += flag;
    } else {
      if (i === 0) {
        flag = 1;
      } else {
        j++;
      }
      i += flag;
    }
  }

  return matrix.reduce((sum, it) => {
    sum += it.join('');
    return sum;
  }, '');
}
