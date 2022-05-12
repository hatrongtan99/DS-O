function patition(arr, l, h) {
    const pivot = arr[h]

    let i = l
    for (let j = l; j < h; j++) {
        if (arr[j] < pivot) {
            const tmp = arr[j]
            arr[j] = arr[i]
            arr[i] = tmp
            i++
        }
    }
    const tmp = arr[i]
    arr[i] = arr[h]
    arr[h] = tmp
    return i
}


function quickSort(arr, low, high) {
    if (low < high) {
        const p = patition(arr, low, high);
        quickSort(arr, low, p - 1)
        quickSort(arr, p + 1, high)
    }
}

const arr = [10, 11, 4, 6, 4, 8]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
