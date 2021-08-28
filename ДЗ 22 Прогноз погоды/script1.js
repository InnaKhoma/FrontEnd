const FORECAST_TEMPLATE = forecastTemplate.innerHTML;

function loadForecast(e) {
    e.preventDefault();

    if(formValidation()){
        const city = document.getElementById('input');

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city.value +"&lang=ru&units=metric&appid=5c0f7677d83d2f7a5432bd0415a5ae4e")
            .then((res) => res.json())
            .then((json) => showForecast(json))
            .catch((error) => console.log(error));
    }

}

function showForecast(data){
    let html = FORECAST_TEMPLATE
        .replace("{{temp}}", data.main.temp)
        .replace("{{clouds}}", data.weather[0].description)
        .replace("{{humidity}}", data.main.humidity)
        .replace("{{pressure}}", data.main.pressure)
        .replace("{{speed}}", data.wind.speed);

    container.insertAdjacentHTML("beforeend", html);
}

function formValidation(){
    let todoValue = document.getElementById('input');
    let flag = true;

    if (!todoValue.value) {
        const error = document.createElement('div')
        error.className='error'
        error.innerHTML = 'Укажите название города'
        todoValue.parentElement.insertBefore(error, todoValue)
        flag = false;
    }

    return flag;
}

show.addEventListener('click', loadForecast);