function updateClock() {
    
    let now = new Date();

    
    let portugalTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Lisbon"}));


    let hours = portugalTime.getHours();
    let minutes = portugalTime.getMinutes();
    let seconds = portugalTime.getSeconds();

    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    let currentTime = `${hours}:${minutes}:${seconds}`;

   
    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);