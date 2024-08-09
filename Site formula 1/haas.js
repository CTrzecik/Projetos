function updateClock() {

    let now = new Date();


    let usaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));


    let hours = usaTime.getHours();
    let minutes = usaTime.getMinutes();
    let seconds = usaTime.getSeconds();


    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    
    let currentTime = `${hours}:${minutes}:${seconds}`;

  
    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);
