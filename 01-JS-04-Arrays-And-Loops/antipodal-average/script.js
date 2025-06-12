/*
Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`. 
*/

const antipodal = (input) => {
    const result = [];
    let lhsIndex = 0;
    let rhsIndex = input.length - 1;
    while (true) {
        if (lhsIndex >= rhsIndex) {
            break;
        }
        result.push((input[lhsIndex] + input[rhsIndex]) / 2);
        lhsIndex++;
        rhsIndex--;

    }
    return result
}
console.log(antipodal([1, 2, 3, 5, 22, 6]));