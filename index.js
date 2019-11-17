const { max_heapify } = require('./max_heapify');
const { min_heapify } = require('./min_heapify');
const arr = [8, 7, 15, 3, 20, 6, 4];
const minHeap = min_heapify(arr);
console.log('min heap');
console.log(minHeap);

const maxHeap = max_heapify(arr);
console.log('max heap');
console.log(maxHeap);