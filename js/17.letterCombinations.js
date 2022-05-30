console.log(letterCombinations('23'));
function letterCombinations(str) {
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
    if (!str.length)
        return [];
    const result = [];
    run('', str);
    function run(resolvedStr, remainStr = '') {
        if (remainStr === '') {
            return result.push(resolvedStr);
        }
        const numb = remainStr[0];
        const arr = map[numb];
        const subStr = remainStr.substring(1);
        arr.forEach(letter => {
            run(resolvedStr + letter, subStr);
        });
    }
    return result;
}
