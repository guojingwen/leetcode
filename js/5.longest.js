export function longestPalindrome1(s) {
    if (!s.length)
        return '';
    let start = 0;
    let max = 1;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + max; j <= s.length; j++) {
            const str = s.substring(i, j);
            if (str === [...str].reverse().join('') && j - i > max) {
                max = j - i;
                start = i;
            }
        }
    }
    return s.substring(start, start + max);
}
export function longestPalindrome2(s) {
    if (!s.length)
        return '';
    const dp = Array.from({ length: s.length }, () => Array.from({ length: s.length }, () => 0));
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }
    let max = 1;
    let start = 0;
    for (let len = 2; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            let isCenterPalind = false;
            if (len % 2 === 1) {
                isCenterPalind = !!dp[i + 1][i + len - 2];
            }
            else {
                if (len === 2) {
                    isCenterPalind = true;
                }
                else {
                    isCenterPalind = !!dp[i + 1][i + len - 2];
                }
            }
            if (isCenterPalind && s[i] === s[i + len - 1]) {
                dp[i][i + len - 1] = len;
                if (len > max) {
                    max = len;
                    start = i;
                }
            }
        }
    }
    console.log(dp);
    return s.substring(start, start + max);
}
export function longestPalindrome(s) {
    if (s === '')
        return '';
    let begin = 0;
    let len = 1;
    for (let i = 0; i < s.length - 1; i++) {
        const oddLen = expandAroundCenter(i, i);
        const evenLen = expandAroundCenter(i, i + 1);
        const max = Math.max(oddLen, evenLen);
        if (max > len) {
            begin = i - Math.floor((max - 1) / 2);
            len = max;
        }
    }
    return s.substring(begin, begin + len);
    function expandAroundCenter(i, j) {
        let len = i === j ? -1 : 0;
        while (i >= 0 && j < s.length) {
            if (s[i] !== s[j]) {
                break;
            }
            len += 2;
            --i;
            ++j;
        }
        return len;
    }
}
