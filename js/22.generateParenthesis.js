console.log(generateParenthesis(3));
function generateParenthesis(n) {
    if (n === 0)
        return [];
    let result = [];
    if (n === 1)
        return ['()'];
    result.push('()');
    for (let i = 2; i <= n; i++) {
        const newResult = new Set();
        result.forEach(str => {
            for (let j = 0; j < str.length; j++) {
                newResult.add(`${str.substring(0, j)}()${str.substring(j)}`);
            }
        });
        result = [...newResult];
    }
    return result;
}
