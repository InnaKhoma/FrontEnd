document.addEventListener("DOMContentLoaded", startClock());

function startClock() {
    setInterval(() => {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let month = currentTime.getMonth();
        let date = currentTime.getDate();
        let year = currentTime.getFullYear();
        let monthName = [
            "Января",
            "Февраля",
            "Марта",
            "Апреля",
            "Мая",
            "Июня",
            "Июля",
            "Августа",
            "Сентября",
            "Октября",
            "Ноября",
            "Декабря"
        ];

        let hoursText = document.getElementById("hours");
        if (hours < 10) {

            hoursText.innerHTML = `0${hours}`;
        } else {
            hoursText.innerHTML = hours;
        }

        let minutesText = document.getElementById("minutes");
        if (minutes < 10) {

            minutesText.innerHTML = `0${minutes}`;
        } else {
            minutesText.innerHTML = minutes;
        }

        let secondsText = document.getElementById("seconds");
        if (seconds < 10) {
            secondsText.innerHTML = `0${seconds}`;
        } else {
            secondsText.innerHTML = seconds;
        }

        let currentDate = document.getElementById("full-date");
        currentDate.innerHTML = `${date} ${monthName[month]} ${year}`;

    }, 1000);
}