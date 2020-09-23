'use strict'

function getArea(PI, r) {
    return PI * Math.pow(r, 2)
}

function getPerimeter(PI, r) {
    return 2 * PI * r
}

function main() {
    const r = 2.6
    const PI = Math.PI
    
    console.log(getArea(PI, r))
    console.log(getPerimeter(PI, r))

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main()