const helper = require('./helper')
const arr = [9, 8, 7, 6, 4,];
const size = arr.length

// function selectionSort() {
//     for (let i = 0; i < size - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < size; j++) {
//             if (arr[minIndex] > arr[j]) {
//                 minIndex = j;
//             }
//         }
//         helper.swapVariable(arr, minIndex, i);
//         console.log(arr)
//     }
// }

// selectionSort();