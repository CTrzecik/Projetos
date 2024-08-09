function updateClock() {
   
    let now = new Date();


    let germanyTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Berlin"}));

   
    let hours = germanyTime.getHours();
    let minutes = germanyTime.getMinutes();
    let seconds = germanyTime.getSeconds();

    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    let currentTime = `${hours}:${minutes}:${seconds}`;

   
    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);
