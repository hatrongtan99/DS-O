function binarySearch(arr, x) {
    let left = 0
    let right = arr.length - 1
    
    while (right >= left) {
        let m = left + parseInt((right - left) / 2)

        if (arr[m] == x) return m

        if (arr[m] > x) right = m - 1

        if (arr[m] < x) left = m + 1
    }
    return -1
}

function binarySearchRecusive(arr, l, r, x) {
    if (r >= l) {
        const m = l + parseInt((r - l) / 2)

        if (arr[m] == x) return m

        if (arr[m] > x) return binarySearchRecusive(arr, l, m - 1, x)

        return binarySearchRecusive(arr, m + 1, r, x)
    }
    return - 1
}


const arr = [1, 2, 5, 6, 10, 11, 12, 15]

console.log(binarySearchRecusive(arr, 0, arr.length - 1, 12))