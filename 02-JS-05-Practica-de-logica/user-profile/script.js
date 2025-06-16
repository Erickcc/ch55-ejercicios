/*
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

const username = prompt("Hola, ingresa tu nombre de usuario");
const age = prompt("Ahora ingresa tu edad");
const favoriteMovies = [];
alert("A continuacion te vamos a pedir tus 5 peliculas favoritas");
for (let i = 1; i <= 5; i++) {
    favoriteMovies.push(prompt(`Ingresa la variable numero ${i}`));
}
console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:`);


let counter = 0;
while (counter < favoriteMovies.length) {
    console.log(`Mi pelicula #${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}