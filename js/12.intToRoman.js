export function intToRoman(num) {
    const config = [
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000],
    ];
    const nums = config.map((it) => it[1]);
    const map = config.reduce((sum, it) => {
        const [str, num] = it;
        sum[str] = num;
        sum[num] = str;
        return sum;
    }, {});
    let result = '';
    while (num > 0) {
        for (let j = nums.length - 1; j >= 0; j--) {
            const n = nums[j];
            if (num >= n) {
                num -= n;
                result += map[n];
                break;
            }
        }
    }
    return result;
}
