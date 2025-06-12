/*
Display online status for a list of users.

 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`. 
*/

const onlineStatus = (input) => {
    let output = "";
    let index = 0;
    while (index <= 2) {
        if (index === 0) {
            output += input[index];
        } else if (index < 2) {
            output += `, ${input[index]}`;
        } else {
            output += ` and ${input.length - 2} more online`;
            break;
        }
        index++;
    };
    return output;
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));