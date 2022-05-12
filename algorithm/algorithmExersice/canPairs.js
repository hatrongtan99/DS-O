function canPairs(arr, k) {
    const restArr = new Map();

    for (let value of arr) {
        const rest = value % k
        restArr.set(rest, (restArr.get(rest) || 0) + 1)
    }

    for (let value of arr) {
        const rest = value % k

        if (rest * 2 == k) {
            if (restArr.get(rest) % 2 == 1) return false
        }

        if (rest % k == 0) {
            if (restArr.get(rest) % 2 == 1) return false
        }

        if (restArr.get(k - rest) != restArr.get(rest)) return false
    }
    return true
}


let arr = [9, 7, 5, 3, 8, 10];
let k = 6;

// Function call
console.log(canPairsLoop(arr, k));


// other way
function canPairsLoop(arr, k) {

    const restArr = []
    
    for (let i = 0; i < arr.length; i++) {
        restArr[i] = arr[i] % k
    }

    for (let i = 0; i < arr.length; i++) {
        const rest = k - arr[i] % k
        for (let j = 0; j < restArr.length; j++) {
            if (restArr[j] == rest) {
                restArr.splice(j, 1)
                break
            }

            if (j == restArr.length - 1) return false
        }
    }

    if (restArr.length == 0) return true
    return false
}