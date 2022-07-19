// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const ending = 'ay';


textInput.addEventListener('keyup', (e) => {
  const input = e.target.value;
  console.log(input);
  const words = input.split(' ');
  const output = words.map(word => convertToPigLatin(word)).join(' ');
  textOutput.innerText = output;


  // check if it ends in a vowel then just add ay
  if (vowels.includes(input[0])) {
    output = input + ending;
  } else {
    let consonants = '';
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        break;
      }
      consonants += input[i];
    }
    output = input.substring(consonants.length) + consonants + ending;
  }
  // translate to pig latin
  textOutput.innerText = output;
});

const convertToPigLatin = input => {
  if (vowels.includes(input[0])) {
    output = input + ending;
  } else {
    let consonants = '';
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        break;
      }
      consonants += input[i];
    }
    output = input.substring(consonants.length) + consonants + ending;
  }
  return output;
}

// const pigLatin = (word) => {
  // your code here
  // break your code into pieces and focus on one piece at a time...

  //should lowercase and trim word before translation
  //should attach "yay" if word begins with vowel
  //should translate a complex word
  //should translate a simple word

//variable for the word the user inputs and trim the whitespace and make lowercase
//   word = word.trim().toLowerCase();
//   let firstLetter = word.charAt(0);

//   if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
//     let vowelFirst = word + "yay";
//     return vowelFirst
//   }else {
//     let firstMatch = word.match(/[aeiou]/g) || 0;
//     let vowel = word.indexOf(firstMatch[0]);
//     let consFirst = word.slice(vowel) + word.slice(0, vowel) + "ay";
//     return consFirst
//   }
// //array of vowels to compare to the word
// }


// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.