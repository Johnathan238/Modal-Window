'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')

for(let i =0; i < btnsSHowModal.length; i++){
    btnsSHowModal[i].addEventListener('click', function(){
        
        console.log('Button Clicked');
        modal.classList.remove('hidden')
    });
}