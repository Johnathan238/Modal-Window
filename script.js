'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')

for (i = 0; i < btnsSHowModal.length; i++){
  console.log('====================================');
  console.log(btnsSHowModal[i].textContent);
  console.log('====================================');
}