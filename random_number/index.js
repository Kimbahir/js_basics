

const rollBtn = document.getElementById('rollBtn');
const rollLbl = document.getElementById('rollLbl');

const min = 1
const max = 6

let randomNum;

rollBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    rollLbl.textContent = randomNum;
    }