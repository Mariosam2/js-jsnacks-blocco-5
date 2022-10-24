console.log(reversedWord('Ciao'));
/**
 * Takes a string a return the reversed of that string
 * @param {string} string string to reverse
 */
function reversedWord(string){
    return string.split('').reverse().join('');
}