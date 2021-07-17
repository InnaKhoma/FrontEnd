function addItem(e) {
    e.preventDefault();

    let todoValue = document.getElementById('input');

    let todoLast = document.createElement('li');
    todoLast.innerHTML = `<p>${todoValue.value}</p>` + `<button><span class="material-icons">delete</span></button>`;

    let todoList = document.getElementById('list');
    todoList.append(todoLast);

    document.getElementById('input').value = "";

    changeStatus(todoLast);
    removeItem(todoLast);
}

function removeItem(item) {
    let removeBtn = item.querySelector('button');
    removeBtn.onclick = () => removeBtn.parentElement.remove();
}

function changeStatus(item) {
    let firstClick = true;

    item.onclick = function() {
        if (firstClick) {
            item.classList.add('done');
            firstClick = false;
        } else {
            item.classList.remove('done');
            firstClick = true;
        }
    }
}

addBtn.addEventListener('click', addItem);

