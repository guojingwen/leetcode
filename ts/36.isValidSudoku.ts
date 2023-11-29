export function isValidSudoku(board: string[][]): boolean {
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
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val !== '.') {
        const num = +val - 1;
        ++rows[i][num];
        ++columns[j][num];
        const box = subboxs[Math.floor(i / 3)][Math.floor(j / 3)];
        ++box[num];
        if (rows[i][num] > 1 || columns[j][num] > 1 || box[num] > 1) {
          return false;
        }
      }
    }
  }

  return true;
}
