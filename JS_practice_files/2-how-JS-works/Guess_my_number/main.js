'use strict'
// the mario selector
const mario = document.querySelector(".mario");
// check button
const check = document.querySelector(".check");


check.addEventListener('click', () => {

    // make mario jump when checking
    mario.classList.remove('mario--jump');
    setTimeout(() => {
        mario.classList.add('mario--jump');
    }, 10);
})
