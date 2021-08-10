document.addEventListener("DOMContentLoaded", getCookie());

function getCookie() {
    if(document.cookie !== ""){
        let myCookie = document.cookie.split("=");
        let userName = decodeURIComponent(myCookie[1]);
        return setName(userName);
    } else {
        login.addEventListener('click', setCookie);
    }
}

function setName(name) {
    const welcomeMessage = document.getElementById('welcome');
    document.getElementById('form').classList.add('hide');
    welcomeMessage.innerHTML = `Welcome ${name}`;
    welcomeMessage.classList.remove('hide');
}

function setCookie() {
    const userName = document.getElementById('name').value;
    if(userName){
        document.cookie = "user=" + encodeURIComponent(userName);
        console.log(document.cookie);
        document.getElementById('form').classList.add('hide');
        const welcomeMessage = document.getElementById('welcome');
        welcomeMessage.innerHTML = `Welcome ${userName}`;
        welcomeMessage.classList.remove('hide');
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = "Введите имя";
        document.getElementById('form').append(errorMessage);
    }
}

