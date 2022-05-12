const arr = [5, 8, 7, 6, 4,];
const size = arr.length

const insertionSort = () => {
    for (let i = 1; i < size; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = key
        console.log(arr)
    }
}

insertionSort()