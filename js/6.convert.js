export function convert(s, numRows) {
    if (numRows === 1)
        return s;
    const matrix = Array.from({ length: numRows }, () => []);
    let i = 0, flag = 1, j = 0, index = 0;
    for (let index = 0; index < s.length; index++) {
        matrix[i][j] = s[index];
        if (flag === 1) {
            if (i === numRows - 1) {
                flag = -1;
                j++;
            }
            i += flag;
        }
        else {
            if (i === 0) {
                flag = 1;
            }
            else {
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
