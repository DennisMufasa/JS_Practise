//randomatic generates a random string or number based on parsed criteria
let randomize = require('randomatic'); //require randomatic
//generate a string of 10 characters
// console.log(randomize('a', 10)); //lowercase

//generate an uppercase string of 10 chars
// console.log(randomize('A', 10)); //uppercase

//generate 10 random numbers
// console.log(randomize('0', 10)); //numbers

//generating random special characters
// console.log(randomize('!', 5)); //special characters

//geerate mixed characters
// console.log(randomize('*', 10)); //all characters

//generating characters based on a given set of chars
console.log(randomize('?', 10, {chars: 'dennismufasa'})); // ? options characters
console.log(randomize.isCrypto);

//generating characters without a subset of chars
console.log(randomize('?', 3, {exclude: 'abcdef'}));
console.log(randomize.isCrypto); /*returns true if cryptography secure function
                                    and false when Math.random is used*/

//generating a random set of all characters
console.log(randomize('Aa0!', 10));