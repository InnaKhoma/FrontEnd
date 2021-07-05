const n = prompt('Введите натуральное число');

function showNumber(n) {
    if (n === 1) return 1;
    return showNumber(n - 1) + " " + n;
}

function sumNumber(n) {
    if (n === 1) return 1;
    return n + sumNumber(n - 1);
}

alert( showNumber(+n) );

alert( `Сумма чисел: ${sumNumber(+n)}`);