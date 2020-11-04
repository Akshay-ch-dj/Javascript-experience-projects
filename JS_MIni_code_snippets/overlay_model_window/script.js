'use strict';

// selectors
const showButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// vars and functions
let isShown = false;

const modalShow = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    isShown = true;
};

const modalHide = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    isShown = false;
};

// Event listeners
showButton.forEach(btn => btn.addEventListener('click', modalShow));
closeButton.addEventListener('click', modalHide);
overlay.addEventListener('click', modalHide);

document.addEventListener('keydown', (e) => {
   if (e.code === 'Escape' && isShown){
        modalHide();
   }
});
