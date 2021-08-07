function createCounter(e) {
    e.preventDefault();
    let counter = 0;
    counter += Number(document.getElementById('initValue').value);

    let newCounter = document.createElement('div');
    newCounter.innerHTML = `<p>Counter value:</p>` + `<p>${counter}</p>` + `<button>Count</button>`;
    document.getElementById('container').append(newCounter);
    newCounter.querySelector('button').addEventListener('click', changeNewCounter);

    function changeNewCounter(e){
        counter = Number(counter) + 1;
        e.target.previousElementSibling.textContent = `${counter}`;
    }

    document.getElementById('initValue').value = "";
}

counterBtn.addEventListener('click', createCounter);