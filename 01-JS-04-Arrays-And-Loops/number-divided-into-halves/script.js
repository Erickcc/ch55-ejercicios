/*
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`. 
*/
const numDiv = (input) => {
    const output = [input / 2, input / 2];
    return output;
};
console.log(numDiv(4));