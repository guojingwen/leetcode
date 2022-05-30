var reverse = function (x) {
    const s = Math.abs(x) + '', len = s.length;
    let sign = x < 0 ? -1 : 1;
    let newS = '';
    for (let i = len - 1; i >= 0; i--) {
        newS += s[i];
    }
    const val = +newS;
    if (val < Math.pow(2, -31))
        return 0;
    if (val > Math.pow(2, 31) - 1)
        return 0;
    return sign * val;
};
console.log(reverse(-123));
