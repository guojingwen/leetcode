export function myAtoi(s) {
    s = s.trim();
    let current = 0;
    let sign = null;
    let numStr = '';
    while (current < s.length) {
        const char = s[current++];
        if (/[\d]/.test(char)) {
            if (sign === null) {
                sign = '+';
            }
            numStr += char;
        }
        else if (['+', '-'].includes(char)) {
            if (sign === null) {
                sign = char;
            }
            else {
                break;
            }
        }
        else {
            if (sign === null) {
                return 0;
            }
            break;
        }
    }
    const num = +`${sign || '+'}${numStr || 0}`;
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
