/* eslint-disable no-unused-vars */
//Stretch 1

const adderMaker = function(n) {
    return function(m) {
        return n + m;
    }
}

const addSix = adderMaker(6);

console.log(addSix(10));
console.log(addSix(21));

const addFour = adderMaker(4);

console.log(addFour(5));