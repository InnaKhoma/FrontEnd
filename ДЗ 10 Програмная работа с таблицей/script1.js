function taskOne(year) {
    return document.querySelector('#title > span').innerHTML = year;
}

function taskTwo(attribute) {
    return document.querySelector(`[${attribute}]`).removeAttribute(`${attribute}`);
}

function taskThree(attribute, color) {
    let elements = document.querySelectorAll(`[${attribute}]`);

    for (let node of elements){
        node.style.backgroundColor = `${color}`;
    }

    return elements;
}

function taskFore(companyName, contactName, revenue) {
    let trLast = document.createElement('tr');
    trLast.innerHTML = `<td>${companyName}</td>\n` + `<td>${contactName}</td>\n` + `<td data-id="revenue-value">${revenue}</td>`;
    return document.querySelector(`tbody > tr:last-child`).before(trLast);
}

function taskFive(rowNumber) {
    return document.querySelector('table').rows[rowNumber].remove();
}

taskOne('2020');
taskTwo('my-attribute');
taskThree('data-id', 'green');
taskFore('New Company', 'John Dou', '88K');
taskFive(1);