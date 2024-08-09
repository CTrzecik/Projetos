function updateClock() {
    
    let now = new Date();

    
    let ukTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/London"}));

    
    let hours = ukTime.getHours();
    let minutes = ukTime.getMinutes();
    let seconds = ukTime.getSeconds();

    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    let currentTime = `${hours}:${minutes}:${seconds}`;

    
    document.getElementById('clock').textContent = currentTime;
}


updateClock();

// Configurar um intervalo para chamar a função updateClock a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);