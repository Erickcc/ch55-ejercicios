/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
const recursion = (input) => {
    if (input > 1) {
        return input * recursion(input - 1);
    } else {
        return 1;
    }
}

const factorial = () => {
    const userInput = Number(prompt("Ingresa un numero y te dire su factorial"));
    return `El factoria de ${userInput} es ${recursion(userInput)}`;
}

console.log(factorial());