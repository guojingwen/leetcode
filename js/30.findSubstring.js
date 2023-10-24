var s = 'wordgoodgoodgoodbestword', words = ['word', 'good', 'best', 'good'];
console.log(findSubstring(s, words));
function findSubstring(s, words) {
    const res = [];
    if (!words.length)
        return res;
    const len = words[0].length;
    const wLen = words.length;
    const allLen = len * wLen;
    for (let i = 0; i <= s.length - allLen; i++) {
        const subStr = s.substring(i, i + allLen);
        const flag = check(subStr, words.slice());
        if (flag) {
            res.push(i);
        }
    }
    return res;
    function check(subStr, words) {
        let flag = true;
        while (subStr.length) {
            const first = subStr.substring(0, len);
            const index = words.findIndex((word) => word === first);
            if (index === -1) {
                flag = false;
                break;
            }
            else {
                words.splice(index, 1);
                subStr = subStr.substring(len);
            }
        }
        return flag;
    }
}
