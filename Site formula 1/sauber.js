function updateClock() {
  
    let now = new Date();

   
    let switzerlandTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Zurich"}));

    
    let hours = switzerlandTime.getHours();
    let minutes = switzerlandTime.getMinutes();
    let seconds = switzerlandTime.getSeconds();

 
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    
    let currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = currentTime;
}


updateClock();


setInterval(updateClock, 1000);
