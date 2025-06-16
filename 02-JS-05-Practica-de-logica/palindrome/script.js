/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/
const isPalindrome = () => {
    const userInput = prompt("Ingresa una palabra y te dire si es palindromo");
    //Only allows lower case letters,  upper case letters and numbers, removes punctuations and spaces
    const filteredString = userInput.replace(/[^a-zA-Z0-9]/g, '');
    let lhsIndex = 0;
    let rhsIndex = filteredString.length - 1;
    while (true) {
        if (lhsIndex >= rhsIndex) {
            console.log(`${userInput} is palindrome`);
            return true;
        }
        if (filteredString[lhsIndex] === filteredString[rhsIndex]) {
            lhsIndex++;
            rhsIndex--;
        } else {
            console.log(`${userInput} is not palindrome`);
            return false;
        }
    }
}
console.log(isPalindrome());