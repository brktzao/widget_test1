function updateClock() {
    const now = new Date();

    // Obtém a data
    const weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    const dayOfWeek = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();

    // Formatação da data sem o ano (ex: "Wednesday, March 29")
    const formattedDate = `${dayOfWeek}, ${month} ${date}`;

    // Atualiza a div de data
    document.getElementById('date').innerHTML = formattedDate;

    // Obtém as horas, minutos e segundos
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Define AM ou PM
    let period = hours >= 12 ? "PM" : "AM";

    // Converte para formato de 12 horas
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Garante que minutos e segundos tenham sempre 2 dígitos
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Formatação do relógio (ex: "12:30:45 PM")
    const formattedTime = `${hours}:${minutes}:${seconds} ${period}`;

    // Atualiza a div de relógio
    document.getElementById('clock').innerHTML = formattedTime;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();


