/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
*/


const alarm = () => {
    const timeout = Number(prompt("Cuantos segundos necesitas para que se active la alarma?"));
    console.log(`La alarma se activara despues de ${timeout} segundos`);
    setTimeout(() => {
        console.log(`Alarma activa!! Ya pasaron ${timeout} segundos`);
        alert(`Alarma activa!! Ya pasaron ${timeout} segundos`);
    }, timeout * 1000);
}

alarm();