console.log(romanToInt('MCMXCIV'));
function romanToInt(str) {
    const romanNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M'].reverse();
    const romanPrices = [1, 5, 10, 50, 100, 500, 1000].reverse();
    const map = romanNums.reduce((sum, roman, index) => {
        sum[roman] = romanPrices[index];
        return sum;
    }, {});
    const prevMap = {
        C: ['M', 'D'],
        X: ['C', 'L',],
        I: ['X', 'V'],
    };
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        const prevs = prevMap[str[i]];
        const roman = str[i];
        if (prevs && i < str.length - 1) {
            const index = prevs.findIndex(it => it === str[i + 1]);
            if (index !== -1) {
                const nextRomain = prevs[index];
                num += (map[nextRomain] - map[roman]);
                i++;
                continue;
            }
        }
        num += map[roman];
    }
    return num;
}
