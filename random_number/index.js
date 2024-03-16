

const rollBtn = document.getElementById('rollBtn');
const rollLbl1 = document.getElementById('rollLbl1');
const rollLbl2 = document.getElementById('rollLbl2');
const rollLbl3 = document.getElementById('rollLbl3');

const min = 1
const max = 6

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

rollBtn.onclick = function() {
    rollLbl1.textContent = randomNumber(min, max);
    rollLbl2.textContent = randomNumber(min, max);
    rollLbl3.textContent = randomNumber(min, max);
    }