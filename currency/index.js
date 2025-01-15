/*
    <button id="DKKtoNOK" class="btn btn-primary">DKK to NOK</button>
    <button id="DKKtoEUR" class="btn btn-primary">DKK to EUR</button>
    <button id="NOKtoDKK" class="btn btn-primary">NOK to DKK</button>
    <button id="NOKtoEUR" class="btn btn-primary">NOK to EUR</button>
    <button id="EURtoDKK" class="btn btn-primary">EUR to DKK</button>
    <button id="EURtoNOK" class="btn btn-primary">EUR to NOK</button>
*/

let DKK = {};
let NOK = {};
let EUR = {};

async function load() {
    EUR = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json');
    DKK = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/dkk.json');
    NOK = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/nok.json');
}

function defaultColorButtonsButThis(currency) {
    let buttons = ['DKKtoNOK', 'DKKtoEUR', 'NOKtoDKK', 'NOKtoEUR', 'EURtoDKK', 'EURtoNOK'];
    buttons.forEach(button => {
        let element = document.getElementById(button);
        if (button === currency) {
            element.style.backgroundColor = 'blue';
        } else {
            element.style.backgroundColor = 'gray';
        }
    });
}

function convert(conversion) {
    let units = parseInt(document.getElementById('units').value, 10);
    let price = parseFloat(document.getElementById('price').value);
    let result = document.getElementById('result');

    if (conversion === 'DKKtoNOK') {
        result.innerHTML = (units * DKK.data.dkk.nok * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (conversion === 'DKKtoEUR') {
        result.innerHTML = (units * DKK.data.dkk.eur * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (conversion === 'NOKtoDKK') {
        result.innerHTML = (units * NOK.data.nok.dkk * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (conversion === 'NOKtoEUR') {
        result.innerHTML = (units * NOK.data.nok.eur * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (conversion === 'EURtoDKK') {
        result.innerHTML = (units * EUR.data.eur.dkk * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (conversion === 'EURtoNOK') {
        result.innerHTML = (units * EUR.data.eur.nok * price).toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    defaultColorButtonsButThis(conversion);
}


// make a conversino method that takes the from and to currency as arguments
// and returns the conversion rate
function conversion(from, to) {
    if (from === 'DKK' && to === 'NOK') {
        return DKK.data.dkk.nok;
    } else if (from === 'DKK' && to === 'EUR') {
        return DKK.data.dkk.eur;
    } else if (from === 'NOK' && to === 'DKK') {
        return NOK.data.nok.dkk;
    } else if (from === 'NOK' && to === 'EUR') {
        return NOK.data.nok.eur;
    } else if (from === 'EUR' && to === 'DKK') {
        return EUR.data.eur.dkk;
    } else if (from === 'EUR' && to === 'NOK') {
        return EUR.data.eur.nok;
    }
}

// make the page call convert with "DKKtoNOK" when the page loads
document.addEventListener('DOMContentLoaded', function () {
    load().then(() => {
        convert('DKKtoNOK');
    });
});