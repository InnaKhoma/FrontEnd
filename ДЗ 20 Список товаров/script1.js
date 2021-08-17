let quantityTotal = 0;
let priceTotal = 0;

function addItem() {
    if(formValidation()){
        const commodity = document.getElementById('commodity');
        const quantity = document.getElementById('quantity');
        const price = document.getElementById('price');

        let tableRow = document.createElement('tr');
        tableRow.innerHTML =
            `<td>${commodity.value}</td>` +
            `<td>${quantity.value}</td>` +
            `<td>${price.value}</td>` +
            `<td><button class="delete"><span class="material-icons">delete</span></button></td>`;

        let table = document.getElementById('tbody');
        table.append(tableRow);

        quantityTotal += Number(quantity.value);
        document.getElementById('quantityTotal').innerText = quantityTotal;

        priceTotal += Number(price.value);
        document.getElementById('priceTotal').innerText = priceTotal;

        document.getElementById('commodity').value = "";
        document.getElementById('quantity').value = "";
        document.getElementById('price').value = "";

        let errors = document.querySelectorAll('.error')
        for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
        }

        removeItem(tableRow);
    }
}

function removeItem(item) {
    const removeBtn = item.querySelector('button');
    removeBtn.onclick = removeElements;
    function removeElements(){
        removeBtn.closest("tr").remove();

        quantityTotal -= Number(removeBtn.closest("tr").childNodes[1].innerText);
        document.getElementById('quantityTotal').innerText = quantityTotal;

        priceTotal -= Number(removeBtn.closest("tr").childNodes[2].innerText);
        document.getElementById('priceTotal').innerText = priceTotal;
    }
}

function formValidation(){
    const fields = document.querySelectorAll('.field')
    let flag = true;

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            const error = document.createElement('div')
            error.className='error'
            error.innerHTML = 'Заполните поле'
            fields[i].parentElement.insertBefore(error, fields[i])
            flag = false;
        }
    }

    return flag;
}

addBtn.addEventListener('click', addItem);