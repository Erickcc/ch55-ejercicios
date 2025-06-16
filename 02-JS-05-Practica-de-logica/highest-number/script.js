/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/
const highestNumber = () => {
    let hiNumber = 0;
    alert("A continuacion se te va a solicitar que ingreses 10 numeros y te regresare el numero mayor de ellos");
    for (let i = 0; i < 10; i++) {
        const userInput = Number(prompt(`Ingresa el numero ${i + 1}`));
        if (userInput > hiNumber) {
            hiNumber = userInput;
        }
    }
    alert(`The highest number is ${hiNumber}`);
    return hiNumber;
}
console.log(highestNumber());