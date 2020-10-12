// Arrow keys are triggered on "keydown" event

// KeyboardEvent.code: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

document.addEventListener("keydown", appendNum);

document.querySelectorAll('button').forEach(btn => addEventListener('click', appendNum));

const btnDecrease = document.querySelector('.down-btn');
const currText = document.querySelector('.number');

function appendNum(e) {
    let currValue = parseInt(currText.textContent);

    if (currValue >= 1) {
        if (e.key === "ArrowUp" || e.target.classList.contains('up-btn')) {
            currValue++;
        } else if (e.key === "ArrowDown" || e.target.classList.contains('down-btn')) {
            console.log(currValue);
            // Fix a bottom threshold of 1
            currValue = (currValue > 1)? (currValue - 1) : currValue;
        }
        currText.innerHTML = `${currValue}`;

        btnDecrease.removeAttribute("disabled");
        if (currValue === 1) {
            btnDecrease.setAttribute("disabled", "");
        }
    }
}