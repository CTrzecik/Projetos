function updateClock() {
    
    let now = new Date();

    
    let italyTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Rome"}));


    let hours = italyTime.getHours();
    let minutes = italyTime.getMinutes();
    let seconds = italyTime.getSeconds();

    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    let currentTime = `${hours}:${minutes}:${seconds}`;

   
    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);
