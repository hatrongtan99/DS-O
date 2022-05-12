const arr = [1, 1, 1, 1, 1, 1];

const findChainMax = (arr) => {
    let currentmMax = 0;
    let count = 0; 

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
        }
        if (arr[i] == 0) {
            count = 0;
        }
        currentmMax = Math.max(currentmMax, count)
    }
    return currentmMax
}

console.log(findChainMax(arr));