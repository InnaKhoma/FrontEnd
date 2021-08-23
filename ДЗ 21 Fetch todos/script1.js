document.addEventListener("DOMContentLoaded", getItems());

const TODO_TEMPLATE = todoItemTemplate.innerHTML;

function getItems() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => handleItems(data))
        .catch((error) => console.log(error))
}

function handleItems(todos) {
    for (todo of todos) {
        loadTodo(todo);
    }
}

function loadTodo(todo) {
    let html = TODO_TEMPLATE
        .replace("{{title}}", todo.title)
        .replace("{{id}}", todo.id)
        .replace("{{class}}", function() {
            if(todo.completed){
                return 'done';
            } else {
                return '';
            }
        });

    if (todo.completed){
        html.replace("{{class}}", 'done');
    } else {
        html.replace("{{class}}", '');
    }

    list.insertAdjacentHTML("beforeend", html);
}

function addTodo(e) {
    e.preventDefault();

    if(formValidation()){
        let html = TODO_TEMPLATE
            .replace("{{title}}", document.getElementById('input').value)
            .replace("{{class}}", '')
            .replace("data-id=\"{{id}}\"", '');

        list.insertAdjacentHTML("beforeend", html);

        document.getElementById('input').value = "";
        document.querySelector('.error').remove();
    }
}

function removeTodo(e) {
    e.currentTarget.parentElement.remove();
}

function changeStatus(e) {
    e.currentTarget.classList.toggle('done');
}

function formValidation(){
    let todoValue = document.getElementById('input');
    let flag = true;

    if (!todoValue.value) {
        const error = document.createElement('div')
        error.className='error'
        error.innerHTML = 'Type your todo'
        todoValue.parentElement.insertBefore(error, todoValue)
        flag = false;
    }

    return flag;
}

