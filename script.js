'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')

const openModal = function (){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i =0; i < btnsSHowModal.length; i++){
    btnsSHowModal[i].addEventListener('click', openModal)
}
const closeModalFam = function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModalFam)

overlay.addEventListener('click', closeModalFam)

document.addEventListener('keydown', function(e){
    console.log(e);
})