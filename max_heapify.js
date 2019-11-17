function swap(arr, currentIndex, largetstValueIndex) {
    const temp = arr[currentIndex];
    arr[currentIndex] = arr[largetstValueIndex];
    arr[largetstValueIndex] = temp;
}

/**
 * max heapify given array
 * @param {*} arr - requirement: arr should start at index 1 not 0
 * @param {*} currentIndex 
 * @param {*} size 
 */
function max_heapify(arr, currentIndex, arrSize) {
    const leftIndex = currentIndex * 2;
    const rightIndex = currentIndex * 2 + 1;
    let largetstValueIndex = currentIndex;
    if (leftIndex < arrSize && arr[currentIndex] < arr[leftIndex]) {
        largetstValueIndex = leftIndex;
    }
    if (rightIndex < arrSize && arr[largetstValueIndex] < arr[rightIndex]) {
        largetstValueIndex = rightIndex;
    }

    if (largetstValueIndex !== currentIndex) {
        swap(arr, currentIndex, largetstValueIndex);
        max_heapify(arr, largetstValueIndex, arrSize);
    }
}

function build_max_heap(arr) {
    let tempArr = [...arr]
    tempArr.unshift(Number.POSITIVE_INFINITY);
    const N = tempArr.length;
    for (let currentIndex = Math.floor(N/2); currentIndex >= 1; currentIndex--) {
        max_heapify(tempArr, currentIndex, N);
    }
    return tempArr;
}
exports.max_heapify = build_max_heap;