function swapVariable(arr, a, b) {
    if (arr[a] == arr[b]) return
    arr[a] = arr[a] + arr[b]
    arr[b] = arr[a] - arr[b]
    arr[a] = arr[a] - arr[b]
}

module.exports = {
    swapVariable
}