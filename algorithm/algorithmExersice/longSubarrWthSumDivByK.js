function longSubarrWthSumDivByK(arr, n, k) {
    const um = new Map();

    let max = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]

        const rest = currentSum % k

        if (rest == 0) max = i + 1
        else if (!um.has(rest)) {
            um.set(rest, i)
        } else if (max < i - um.get(rest)) max = i - um.get(rest)
    }
    return max
}
const arr = [2, 7, 6, 1, 4, 5]
longSubarrWthSumDivByK(arr, arr.length, 3)