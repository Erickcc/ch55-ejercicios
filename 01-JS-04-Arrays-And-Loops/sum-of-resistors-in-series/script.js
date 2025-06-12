/*
Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/
/*
1. Un array de resistencias como entrada
2. Un string de salida
3. Suma del valor absoluto de cada resistencia en serie
Math.abs(); regresa el valor absoluto del argumento
Usar reduce
*/
function sumOfResistors(resistorsArray) {
    const resistorsAbs = resistorsArray.map((element) => Math.abs(element));
    const totalResistance = resistorsAbs.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return `${totalResistance} ohms`;
};

console.log(sumOfResistors([1, 2, 3, -10, -30, 4]));
console.log(sumOfResistors([10, -1, -3, 1, 0, 4]));
console.log(sumOfResistors([15, 22, 3.1, -1]));


