/*
Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`. 
*/

const positiveDom = (input) => {
    let posCounter = 0;
    let negCounter = 0;
    input.forEach((element) => {
        //dont take 0 into account for either counter
        if (element > 0) posCounter++;
        if (element < 0) negCounter++;
    });
    if (posCounter > negCounter) return true;
    if (posCounter < negCounter) return false;
    if (posCounter === negCounter) return "equal";
};
console.log(positiveDom([-1, -3, -5, 4, 6767]));