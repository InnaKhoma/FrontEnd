const radius = getRadius();
const operation = getOperation();

getResult(radius, operation);

function askQuestion(question){
    const answer = prompt(question);
    return answer;
}

function getRadius() {
    let radius;

    do {
        radius = +askQuestion("Введите радиус круга:");
    } while (isNaN(radius) || radius < 1);
    return radius;
}

function getOperation() {
    let operation = askQuestion("Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности");

    while (operation !== "1" && operation !== "2" && operation !== "3"){
        alert("Нет такой команды");
        operation = askQuestion("Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности");
    }
    return operation;
}

function calcDiameter(radius) {
    return result = 2 * radius;
}

function calcArea(radius) {
    const result = Math.PI * Math.pow(radius, 2);
    return result.toFixed(2);
}

function calcCircumference(radius) {
    const result = 2 * Math.PI * radius;
    return result.toFixed(2);
}

function getResult(radius, operation) {
    switch (operation) {
        case "1":
            alert(`Диаметр окружности с радиусом ${radius} равен ${calcDiameter(radius)}`);
            break;
        case "2":
            alert(`Площадь круга с радиусом ${radius} равна ${calcArea(radius)}`);
            break;
        case "3":
            alert(`Длинна окружности с радиусом ${radius} равна ${calcCircumference(radius)}`);
            break;
    }
}