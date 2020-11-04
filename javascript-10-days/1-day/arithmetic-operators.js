'use strict'

function getArea(length, width) {
    return length * width;
}

function getPerimeter(length, width) {
    return 2 * (length + width);
}

function main() {
    const length = 3;
    const width = 4.5;
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}

main()
