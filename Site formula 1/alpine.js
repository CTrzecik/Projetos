function updateClock() {
    
    let now = new Date();


    let franceTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Paris"}));

   
    let hours = franceTime.getHours();
    let minutes = franceTime.getMinutes();
    let seconds = franceTime.getSeconds();

    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

   
    let currentTime = `${hours}:${minutes}:${seconds}`;

    
    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);
