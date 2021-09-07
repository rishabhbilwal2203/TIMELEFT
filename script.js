
function dateconverter(date) {
    
    
    const date_dict = {"01":"jan","02":"feb","03":"mar","04":"apr","05":"may","06":"jun","07":"jul","08":"aug","09":"sep","10":"oct","11":"nov","12":"dec"};
    var date_arr = date.split("-");
    date_arr.reverse();
    date_arr[1] = date_dict[date_arr[1]];
    return date_arr.join(" ");

}

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const eventName = document.getElementById("eventName")

function countdown(eve,newYears) {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    eventName.innerHTML = eve;
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
document.querySelector("#button").addEventListener("click",main);
function main(){
const eve = document.querySelector("#input").value;
const date = document.getElementById("datePicker").value;
const newYears = dateconverter(date);
countdown(eve,newYears);
setInterval(countdown, 1000,eve,newYears);
}
