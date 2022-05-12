var arr = [ 12, 11, 13, 5, 6, 7 ];

const merge = (a, l, m, r) => {
    const n1 = m - l + 1
    const n2 = r - m

    const a1 = []
    const a2 = []

    for (let i = 0; i < n1; i++) {
        a1[i] = a[l + i]
    }

    for (let j = 0; j < n2; j++) {
        a2[j] = a[m + 1 + j]
    }
    
    let i = 0, j = 0, n = l;

        while (i < n1 && j < n2) {
            if (a1[i] < a2[j]) {
                a[n] = a1[i];
                i++;
                n++
            } else {
                a[n] = a2[j];
                j++;
                n++;
            }
        } 
        while (i < n1) {
            a[n] = a1[i];
            i++;
            n++
        } 
        while (j < n2) {
            a[n] = a2[j];
            j++;
            n++;
        }
}

const mergeSort = (arr, l, r) => {
    if (l < r) {
        const m = l + parseInt((r - l) / 2)
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
        // console.log(m)
    }
}

mergeSort(arr, 0, arr.length - 1)
console.log(arr)


function fib(n) {
    if (n == 1 || n == 2) return 1

    let first = 1
    let second = 1

    for (let i = 3; i <= n; i++) {
        second = first + second
        first = second - first
    }

    return second
}

console.time('fib')
console.log(fib(1000))
console.timeEnd('fib')
