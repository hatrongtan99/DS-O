function basicFib(n) {
    if (n == 1 || n == 2) return 1
    return basicFib(n - 1) + basicFib(n - 2)
}

// console.log(basicFib(20))

function fibArray(n, cache = [0, 1, 1]) {
    if (cache[n]) return cache[n]
    return cache[n] = fibArray(n - 1, cache) + fibArray(n - 2, cache)
}

// console.time('fibArray')
// console.log(fibArray(10000))
// console.timeEnd('fibArray')

function fibLoop(n, cache = [0, 1, 1]) {
    if (n == 1 || n == 2) return cache[n]

    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i -  2]
    }
    return cache[n]
}
console.time('fibLoop')
console.log(fibLoop(10000))
console.timeEnd('fibLoop')

function fib(n) {
    if (n <= 2) return 1
    let first = 1
    let second = 1
    for (let i = 3; i <= n; i++) {
        second = first + second
        first = second - first
    }
    return second
}

console.time('fib')
console.log(fib(9999))
console.timeEnd('fib')
