console.log(intToRoman(1994));
function intToRoman(num) {
    const romanNums = ['I', 'V', 'X', 'L', 'C', 'D', 'M'].reverse();
    const romanPrices = [1, 5, 10, 50, 100, 500, 1000].reverse();
    const map = romanNums.reduce((sum, roman, index) => {
        sum[roman] = romanPrices[index];
        return sum;
    }, {});
    const prevMap = {
        M: 'C',
        D: 'C',
        C: 'X',
        L: 'X',
        X: 'I',
        V: 'I'
    };
    let str = '';
    let remain = num;
    while (remain) {
        for (let i = 0; i < romanNums.length; i++) {
            const roman = romanNums[i];
            const price = map[roman];
            const prevRoman = prevMap[roman];
            if (remain >= price) {
                remain -= price;
                str += roman;
                break;
            }
            else if (prevRoman) {
                const min = price - (map[prevRoman]);
                if (remain < price && remain >= min) {
                    remain -= min;
                    str += `${prevRoman}${roman}`;
                    break;
                }
            }
        }
    }
    return str;
}
;
