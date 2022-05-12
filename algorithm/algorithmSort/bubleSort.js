const helper = require('./helper')
const arr = [9, 8, 7, 6, 4,]
const size = arr.length;

const bubleSort = () => {
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            let isSorted = true
            if (arr[j] > arr[j+1]) {
                helper.swapVariable(arr, j, j+1)
                isSorted = false
            }
        }
        console.log(arr)
    }
}

bubleSort()