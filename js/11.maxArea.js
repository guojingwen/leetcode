var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
function maxArea(arr) {
    if (arr.length < 2)
        return 0;
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const width = j - i;
            const height = Math.min(arr[i], arr[j]);
            max = Math.max(max, height * width);
        }
    }
    return max;
}
function maxArea(arr) {
    if (arr.length < 2)
        return 0;
    let max = 0;
    for (let i = 0, j = arr.length - 1;;) {
        if (i >= j)
            return max;
        const width = j - i;
        const height = Math.min(arr[j], arr[i]);
        max = Math.max(height * width, max);
        if (arr[i] < arr[j]) {
            i++;
        }
        else {
            j--;
        }
    }
}
