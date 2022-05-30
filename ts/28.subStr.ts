console.log(strStr('aaaaa', 'bba'));
function strStr(haystack: string, needle: string): number {
    if(needle === '') return -1;
    if(needle.length > haystack.length) return -1;

    for(let i=0; i<= haystack.length - needle.length; i++) {
        const flag = check(haystack, i, i+needle.length, needle);
        if(flag) {
            return i
        }
    }
    return -1;

    function check(str, start, end, subStr): boolean {
        let flag = true;
        for(let i = start; i<end; i++) {
            if(str[i] !== subStr[i-start]) {
                flag = false;
                break;
            }
        }
        return flag;
    }
};
