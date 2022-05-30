console.log(isVaild('{([]})'));
function isVaild(str) {
    let flag = true;
    const arr = [];
    const map = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    for (let i = 0; i < str.length; i++) {
        if (['{', '[', '('].includes(str[i])) {
            arr.push(str[i]);
        }
        else if (['}', ']', ')'].includes(str[i])) {
            if (!arr.length || map[arr[arr.length - 1]] !== str[i]) {
                flag = false;
                break;
            }
            arr.pop();
        }
    }
    if (arr.length) {
        flag = false;
    }
    return flag;
}
