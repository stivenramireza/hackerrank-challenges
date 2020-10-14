'use strict'

function reverseString(s) {
    try {
        s = s.split('').reverse().join('')
    } catch ({ message }) {
        console.log(message)
    } finally {
        console.log(s)
    }
}

function main() {
    const s = '1234567890'
    reverseString(s)
}

main()
