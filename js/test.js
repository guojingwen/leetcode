function heapSort(arr) {
    let heapSize = arr.length;
    buildMaxHeap();
    while (heapSize > 1) {
        --heapSize;
        [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];
        heapify(0, heapSize);
    }
    return arr;
    function buildMaxHeap() {
        let index = heapSize >> 1;
        while (index >= 0) {
            heapify(index, heapSize);
            index--;
        }
    }
    function heapify(index, heapSize) {
        let maxIndex = index;
        const leftIndex = 2 * index + 1;
        if (leftIndex < heapSize && arr[leftIndex] > arr[maxIndex]) {
            maxIndex = leftIndex;
        }
        const rightIndex = 2 * index + 2;
        if (rightIndex < heapSize && arr[rightIndex] > arr[maxIndex]) {
            maxIndex = rightIndex;
        }
        if (maxIndex !== index) {
            [arr[maxIndex], arr[index]] = [arr[index], arr[maxIndex]];
            heapify(maxIndex, heapSize);
        }
    }
}
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    const middleVal = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element >= middleVal) {
            right.push(element);
        }
        else {
            left.push(element);
        }
    }
    return [...quickSort(left), middleVal, ...quickSort(right)];
}
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    const middle = arr.length >> 1;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
    function merge(left, right) {
        const result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        while (left.length) {
            result.push(left.shift());
        }
        while (right.length) {
            result.push(right.shift());
        }
        return result;
    }
}
console.log(heapSort([1, 5, 3, 2, 0, 4, -1]));
