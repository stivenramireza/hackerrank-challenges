'use strict'

function getSecondLargest(nums) {
    const noRepeated = []
    nums.forEach((e, i, array) => {
        if(array.indexOf(e) == i) {
            noRepeated.push(e)
        }
    })
    const sorted = noRepeated.sort((a, b) => a - b)
    return sorted[sorted.length - 2]
}

function main() {
    const n = '5'
    const nums = '2 3 6 6 5'.split(' ').map(Number)
    console.log(getSecondLargest(nums))
}

main()
