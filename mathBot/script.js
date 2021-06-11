function askQuestion(question){
    let answer = prompt(question);
    return answer;
}

function showResult(numberOne, numberTwo, operation, result) {
    switch (operation) {
        case "add":
            operation = "+";
            break;
        case "sub":
            operation = "+";
            break;
        case "mult":
            operation = "*";
            break;
        case "div":
            operation = "/";
            break;
        case "mod":
            operation = "%";
            break;
    }
    return alert(`${numberOne} ${operation} ${numberTwo} = ${result}`);
}

let numberOne = Number(askQuestion("Введите число"));
let numberTwo = Number(askQuestion("Введите число"));
let operation = askQuestion("Введите операцию");
let result;

if(operation && numberOne && numberTwo) {
    if(operation.toLowerCase() === "add" || operation === "+") {
        result = numberOne + numberTwo;
        showResult(numberOne, numberTwo, operation, result);
    } else if (operation.toLowerCase() === "sub" || operation === "-") {
        result = numberOne - numberTwo;
        showResult(numberOne, numberTwo, operation, result);
    } else if (operation.toLowerCase() === "mult" || operation === "*") {
        result = numberOne * numberTwo;
        showResult(numberOne, numberTwo, operation, result);
    } else if (operation.toLowerCase() === "div" || operation === "/") {
        result = numberOne / numberTwo;
        showResult(numberOne, numberTwo, operation, result);
    } else if (operation.toLowerCase() === "mod" || operation === "%") {
        result = numberOne % numberTwo;
        showResult(numberOne, numberTwo, operation, result);
    } else {
        alert(`Введите операцию типа: + - * / %`);
    }
} else {
    alert("Введите корректные значения");
}

