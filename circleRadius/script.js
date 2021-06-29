const getRadius = Number(askQuestion("Введите радиус круга:"));
checkRadius(getRadius);

function askQuestion(question){
    const answer = prompt(question);
    return answer;
}

function checkRadius(radius) {
    if(isNaN(radius) || radius < 1) {
        alert("Нужно ввети число больше 0");
    } else {
        const getOperation = askQuestion("Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности");
        checkOperation(radius, getOperation);
    }
}

function checkOperation(radius, operation) {
    if(operation === "1" || operation === "2" || operation === "3"){
        getResult(radius, operation);
    } else {
        alert("Нет такой команды");
    }
}

function calcDiameter(radius) {
    const result = 2 * radius;
    alert(`Диаметр окружности с радиусом ${radius} равен ${result.toFixed(2)}`);
}

function calcArea(radius) {
    const result = Math.PI * Math.pow(radius, 2);
    alert(`Площадь круга с радиусом ${radius} равна ${result.toFixed(2)}`);
}

function calcCircumference(radius) {
    const result = 2 * Math.PI * radius;
    alert(`Длинна окружности с радиусом ${radius} равна ${result.toFixed(2)}`);
}

function getResult(radius, operation) {
    switch (operation) {
        case "1":
            calcDiameter(radius);
            break;
        case "2":
            calcArea(radius);
            break;
        case "3":
            calcCircumference(radius);
            break;
    }
}