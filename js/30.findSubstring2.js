export function findSubstring(s, words) {
    const result = [];
    let diff = 0;
    const wLen = words[0].length;
    const allLen = words.length * wLen;
    const map = words.reduce((sum, it) => {
        sum[it] = ~~sum[it] + 1;
        return sum;
    }, {});
    while (allLen + diff <= s.length) {
        const flag = run(s, diff);
        if (flag) {
            result.push(diff);
        }
        ++diff;
    }
    return result;
    function run(str, diff = 0) {
        const _map = Object.assign({}, map);
        const subStr = str.substring(diff, diff + allLen);
        for (let i = 0; i < allLen; i += wLen) {
            const word = subStr.substring(i, i + wLen);
            if (_map[word] > 0) {
                --_map[word];
            }
            else {
                return false;
            }
        }
        return true;
    }
}
