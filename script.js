let hourElement = document.getElementById("hour");
let minuteElement = document.getElementById("minute");
let secondElement = document.getElementById("second");

let iftarTime = { hour: 19, minute: 25, second: 0 };  // Başlangıç iftar saati

function updateTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    let remainingSeconds = (iftarTime.hour * 3600 + iftarTime.minute * 60 + iftarTime.second) - (currentHour * 3600 + currentMinute * 60 + currentSecond);

    if (remainingSeconds <= 0) {
        // İftar saati geldi
        hourElement.innerText = "İFTAR ZAMANI";
        minuteElement.innerText = "";
        secondElement.innerText = "";
    } else {
        let hoursLeft = Math.floor(remainingSeconds / 3600);
        remainingSeconds %= 3600;
        let minutesLeft = Math.floor(remainingSeconds / 60);
        let secondsLeft = remainingSeconds % 60;

        // Sayıları güncelle
        updateCounter(hourElement, formatTime(hoursLeft));
        updateCounter(minuteElement, formatTime(minutesLeft));
        updateCounter(secondElement, formatTime(secondsLeft));
    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time.toString();
}

function updateCounter(element, newValue) {
    // Eğer sayı değişirse animasyon başlat
    if (element.innerText !== newValue) {
        element.classList.add("animate");
        setTimeout(() => {
            element.innerText = newValue;
            element.classList.remove("animate");
        }, 990);  // Animasyon süresi
    }
}

setInterval(updateTime, 1000); 
