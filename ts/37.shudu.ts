/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): void {
  const rows = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => 0)
  );
  const columns = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => 0)
  );
  const subboxs = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () =>
      Array.from({ length: 9 }, () => 0)
    )
  );
  const totalCount = 81;
  let fillCount = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val !== '.') {
        const _val = +val - 1;
        ++rows[i][_val];
        ++columns[j][_val];
        const box = subboxs[Math.floor(i / 3)][Math.floor(j / 3)];
        ++box[_val];
        ++fillCount;
        if (
          rows[i][_val] > 1 ||
          columns[j][_val] > 1 ||
          box[_val] > 1
        ) {
          console.log('初始化检查--无解');
          // 无解
          return;
        }
      }
    }
  }
  const [nextI, nextJ, vals] = getNext();
  if (step(nextI, nextJ, vals)) {
    console.log('找到解', board);
    // 找到解
    return;
  }
  console.log('该数独--无解');
  function step(
    nextI: number,
    nextJ: number,
    vals: number[]
  ): boolean {
    for (let ii = 0; ii < vals.length; ii++) {
      const val = vals[ii];
      board[nextI][nextJ] = +val + 1 + '';
      ++rows[nextI][val];
      ++columns[nextJ][val];
      ++subboxs[Math.floor(nextI / 3)][Math.floor(nextJ / 3)][val];
      ++fillCount;
      if (fillCount === totalCount) {
        return true;
      }
      const [i, j, v] = getNext();
      if (step(i, j, v)) {
        return true;
      }
      board[nextI][nextJ] = '.';
      --rows[nextI][val];
      --columns[nextJ][val];
      --subboxs[Math.floor(nextI / 3)][Math.floor(nextJ / 3)][val];
      --fillCount;
    }

    return false;
  }
  function getNext(): [number, number, number[]] {
    let minArr: number[] = [];
    let minI: number | undefined = undefined;
    let minJ: number | undefined = undefined;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') {
          continue;
        }
        const vals: number[] = [];
        for (let k = 0; k < 9; k++) {
          if (
            !rows[i][k] &&
            !columns[j][k] &&
            !subboxs[Math.floor(i / 3)][Math.floor(j / 3)][k]
          ) {
            vals.push(k);
          }
        }
        if (minI === undefined || vals.length < minArr.length) {
          minArr = vals;
          minI = i;
          minJ = j;
        }
        if (minArr.length === 1) {
          return [minI!, minJ!, minArr];
        }
      }
    }
    return [minI!, minJ!, minArr];
  }
}
