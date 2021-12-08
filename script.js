'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')

for (let i = 0; i < btnsSHowModal.length; i++) {
  console.log('====================================');
  console.log(btnsSHowModal[i].textContent);
  console.log('====================================');
}


function spinWords(string) {
  //TODO Have fun :)

  //From MDN 
  return string.split("").reverse().join("")

  // My work
  // for (let i = spinWords().length - 1; i > 0; i -= 1) {
  //   spinWords().reverse
  // }

  // let rWords = rWords.reverse()

  // return rWords



}

console.log('====================================');
console.log(spinWords("Nani"));
console.log('====================================');