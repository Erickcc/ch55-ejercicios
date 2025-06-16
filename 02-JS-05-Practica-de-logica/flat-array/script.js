/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/

const flatArray = (input) => {
    let oneDimArray = [];
    input.forEach(element => {
        // If the element is an array, use recursion to extract each element of the new array, return an array and use .concat() to merge it with oneDimArray
        if (Array.isArray(element)) oneDimArray = oneDimArray.concat(flatArray(element));
        // If the element is not an array, push the value to oneDimArray
        if (!Array.isArray(element)) oneDimArray.push(element);
    });
    return oneDimArray;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]], 8];
console.log(flatArray(multiDimension));