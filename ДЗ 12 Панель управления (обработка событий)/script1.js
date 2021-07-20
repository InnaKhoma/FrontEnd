function load() {
    document.getElementById('removeAttrBtn').addEventListener('click', removeAttribute, false);
    event.stopPropagation();
    document.getElementById('setGreenBtn').addEventListener('click', setGreen, true);
    document.getElementById('addRowBtn').addEventListener('click', addRow);
    document.getElementById('removeSecondRowBtn').addEventListener('click', removeSecondRow);
}

function setYear() {
    const year = document.querySelector('input[name="year"]');
    return document.querySelector('#title > span').innerHTML = year.value;
}

function removeAttribute() {
    return document.querySelector('[my-attribute]').removeAttribute('my-attribute');
}

function setGreen() {
    let elements = document.querySelectorAll('[data-id]');

    for (let node of elements){
        node.style.backgroundColor = 'green';
    }

    return elements;
}

function addRow() {
    let trLast = document.createElement('tr');
    trLast.innerHTML = `<td>Some Company</td>\n` + `<td>John Dou</td>\n` + `<td data-id="revenue-value">0</td>`;
    return document.querySelector(`tbody > tr:last-child`).before(trLast);
}

function removeSecondRow() {
    return document.querySelector('table').rows[1].remove();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('title').style.fontSize = "24px";
});