// console.log(numDecodings("111111111111111111111111111111111111111111111"))
console.log(numDecodings("1"))
console.log(numDecodings2("1"))


function numDecodings2(s: string): number {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const map = {};
    for(let i = 0; i< letters.length; i++) {
        map[i+1] = letters[i];
        map[letters[i]] = i+1;
    }
    let result: string[] = [];
    run('', s);
    console.log(result);
    return result.length;
    function run(str, _s) {
        if(!_s.length) {
            result.push(str);
            return;
        }
        const one = map[_s.substring(0, 1)];
        if(one) {
            run(str+one, _s.substring(1))
        }
        if(_s.length > 1) {
            const two = map[_s.substring(0, 2)];
            if(two) {
                run(str+two, _s.substring(2))
            }
        }
    }
}
/*
function numDecodings(s: string): number {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const map = {};
    for(let i = 0; i< letters.length; i++) {
        map[i+1] = letters[i];
        map[letters[i]] = i+1;
    }
    let count: number = 0;
    run('', s);
    return count;
    function run(str, _s) {
        if(!_s.length) {
            count++;
            return;
        }
        const one = map[_s.substring(0, 1)];
        if(one) {
            run(str+one, _s.substring(1))
        }
        if(_s.length > 1) {
            const two = map[_s.substring(0, 2)];
            if(two) {
                run(str+two, _s.substring(2))
            }
        }
    }
}
*/
function numDecodings(s: string): number {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(!s.length) return 0;
    const map = {};
    for(let i = 0; i< letters.length; i++) {
        map[i+1] = letters[i];
        map[letters[i]] = i+1;
    }
    const dp: number[] = [];
    dp[0] = map[s[0]] ? 1: 0;
    if(s.length<2) return dp[0];
    if(/0{2}/.test(s)) return 0;
    if(s[1] === '0') {
        dp[1] = map[s.substring(0, 2)]? 1 : 0
    } else {
        dp[1] = map[s.substring(0, 2)] ? 2 : dp[0];
    }
    for(let i = 2; i<s.length; i++) {
        const letter = s.substring(i-1, i+1);
        if(s[i] === '0') {
            if(!map[letter]) {
                return 0;
            }
            dp[i] = dp[i-2]
        } else {
            dp[i] = dp[i-1] + (map[letter] ? dp[i - 2] : 0)
        }
    }
    return dp[dp.length -1];
}
