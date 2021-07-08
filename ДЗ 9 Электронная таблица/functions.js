function calculateTotalValue(numbers){
    let totalValue = 0;

    for (let elem of numbers) {
        elem = elem.textContent;
        elem = elem.replace('B','000000000');
        elem = elem.replace('M','000000');
        elem = +elem;
        totalValue += elem;
    }

    return totalValue;
}

function convertToShort (labelValue) {

    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"

        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"

            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(labelValue));
}