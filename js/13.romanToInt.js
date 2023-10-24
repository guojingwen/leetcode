export function romanToInt(strs) {
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
    const [str1s, str2s, map] = config.reduce((sum, it) => {
        const [str, num] = it;
        if (str.length === 2) {
            sum[1].push(str);
        }
        else {
            sum[0].push(str);
        }
        sum[2][str] = num;
        return sum;
    }, [[], [], {}]);
    let result = 0;
    while (strs.length) {
        const two = strs.substring(0, 2);
        let flag = false;
        if (two.length === 2) {
            for (let i = str2s.length - 1; i >= 0; i--) {
                const str = str2s[i];
                if (str === two) {
                    result += map[two];
                    strs = strs.substring(2);
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            continue;
        }
        const one = strs.substring(0, 1);
        for (let i = str1s.length - 1; i >= 0; i--) {
            const str = str1s[i];
            if (str === one) {
                result += map[one];
                strs = strs.substring(1);
                break;
            }
        }
    }
    return result;
}
