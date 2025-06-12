/*
Reto de Programación: FizzBuzz
Descripción:
Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el número tal cual
*/

/*
//Evaluate multiple of 3
const isFizz = ((input) => {
    if (input % 3 === 0) return "Fizz";
    return "";
});
//Evaluate multiple of 5
const isBuzz = ((input) => {
    if (input % 5 === 0) return "Buzz";
    return "";
});

let number = 1;
do {
    console.log((isFizz(number) || isBuzz(number)) ? (isFizz(number) + isBuzz(number)) : number);
    number++;
} while (number <= 100);
*/

// As a function


const fizzBuzz = (targetNumber) => {
    let counter = 1;
    //Evaluate multiple of 3
    const isFizz = ((input) => {
        if (input % 3 === 0) return "Fizz";
        return "";
    });
    //Evaluate multiple of 5
    const isBuzz = ((input) => {
        if (input % 5 === 0) return "Buzz";
        return "";
    });
    //loop from 1 to counterNumber in increments of 1
    do {
        console.log((isFizz(counter) || isBuzz(counter)) ? (isFizz(counter) + isBuzz(counter)) : counter);
        counter++;
    } while (counter <= targetNumber);
}

console.log("100 veces");
fizzBuzz(100);