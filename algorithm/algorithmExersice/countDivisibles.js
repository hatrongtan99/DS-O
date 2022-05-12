function countDivisibles(arr, n) {
    let res = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0)
            res++
        }
    }
    return res
}
 
 
let a = [2, 3, 5, 7];
let n = a.length;

console.log(countDivisibles(a, n))


