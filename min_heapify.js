function swap(arr, currentIndex, largetstValueIndex) {
    const temp = arr[currentIndex];
    arr[currentIndex] = arr[largetstValueIndex];
    arr[largetstValueIndex] = temp;
}

/**
 * min heapify given array
 * @param {*} arr - requirement: arr should start at index 1 not 0
 * @param {*} currentIndex 
 * @param {*} size 
 */
function min_heapify(arr, currentIndex, arrSize) {
    const leftIndex = currentIndex * 2;
    const rightIndex = currentIndex * 2 + 1;
    let smallestValueIndex = currentIndex;
    if (leftIndex < arrSize && arr[currentIndex] > arr[leftIndex]) {
        smallestValueIndex = leftIndex;
    }
    if (rightIndex < arrSize && arr[smallestValueIndex] > arr[rightIndex]) {
        smallestValueIndex = rightIndex;
    }

    if (smallestValueIndex !== currentIndex) {
        swap(arr, currentIndex, smallestValueIndex);
        min_heapify(arr, smallestValueIndex, arrSize);
    }
}

function build_min_heap(arr) {
    let tempArr = [...arr];
    tempArr.unshift(Number.POSITIVE_INFINITY);
    const N = tempArr.length;
    for (let currentIndex = Math.floor(N/2); currentIndex >= 1; currentIndex--) {
        min_heapify(tempArr, currentIndex, N);
    }
    return tempArr;
}
exports.min_heapify = build_min_heap;