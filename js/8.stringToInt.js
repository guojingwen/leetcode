console.log(myAtoi('.1'));
function myAtoi(s) {
    let subStr = '';
    let hasSign = false;
    const newS = s.trimLeft();
    for (let i = 0; i < newS.length; i++) {
        if (['+', '-'].includes(newS[i])) {
            if (!hasSign) {
                subStr += newS[i];
                hasSign = true;
                continue;
            }
            break;
        }
        if (/\d/.test(newS[i])) {
            subStr += newS[i];
            hasSign = true;
        }
        else if (hasSign) {
            break;
        }
        else if (['.', ' '].includes(newS[i])) {
            break;
        }
        else {
            continue;
        }
    }
    const num = +subStr || 0;
    const min = -Math.pow(2, 31);
    if (num < min) {
        return min;
    }
    const max = Math.pow(2, 31) - 1;
    if (num > max) {
        return max;
    }
    return num;
}
;
