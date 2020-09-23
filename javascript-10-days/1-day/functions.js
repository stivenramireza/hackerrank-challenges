'use strict'

function factorial(n) {
    if (n < 0) return -1
    if (n === 0) return 1
    return n * factorial(n - 1)
}

function main() {
    const n = 4;
    
    console.log(factorial(n));
}

main()