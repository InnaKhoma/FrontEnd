function createCalculator(firstValue) {
    let counter = firstValue;

    return {
        sum: function (secondValue) {
            return counter +=secondValue;
        },

        mult: function (secondValue) {
            return counter *=secondValue;
        },

        sub: function (secondValue) {
            return counter -=secondValue;
        },

        div: function (secondValue) {
            return counter /=secondValue;
        },

        set: function (secondValue) {
            return counter = secondValue;
        }
    };
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));