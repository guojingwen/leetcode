console.log(generateParenthesis(3));

function generateParenthesis(n: number): string[]{
    if(n === 0) return [];
    let result: string[]  = [];
    if(n=== 1) return ['()'];
    result.push('()');
    for(let i = 2; i<= n; i++) {
        const newResult: Set<string> = new Set();
        result.forEach(str => {
            for(let j=0; j<str.length; j++) {
                newResult.add(`${str.substring(0, j)}()${str.substring(j)}`)
            }
        });
        result = [...newResult]
    }
    return result;
}
