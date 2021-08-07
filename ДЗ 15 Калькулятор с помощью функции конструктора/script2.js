'use strict';

function Calculator(firstValue) {
    this.counter = firstValue;

    this.sum = function (secondValue) {
        return this.counter +=secondValue;
    };

    this.mult = function (secondValue) {
        return this.counter *=secondValue;
    };

    this.sub = function (secondValue) {
        return this.counter -=secondValue;
    };

    this.div = function (secondValue) {
        return this.counter /=secondValue;
    };

    this.set = function (secondValue) {
        return this.counter = secondValue;
    }
}

const calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100