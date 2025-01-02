// if the value of the id togglerBox is OFF, then turn it ON or vice versa
function toggleTogglerBox(id) {
    console.log('Toggling the toggler box');
    console.log('Value is ' + document.getElementById(id).value);
    var togglerBox = document.getElementById(id);
    let value = togglerBox.innerHTML;
    console.log('Current value: ' + value);
    if (value === 'OFF') {
        document.getElementById(id).innerHTML = 'ON';
    } else {
        value = 'OFF';
    }
}

function changeColor(id) {
    var color = document.getElementById('colorInput').value;
    try {
        if (!color) {
            throw new Error('Color is undefined');
        }
        color = color.toUpperCase();
        console.log('Color: ' + color);
        // check if document.getElementById('colorInput').value is a valid hex color
        // if it is, change the background color of the element with the id of the value of the id parameter
        const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test('#'+color.toUpperCase());
        if (!isValidHex) {
            throw new Error('Invalid hex color');
        }


        document.getElementById(id).style.backgroundColor = `#${document.getElementById('colorInput').value.toUpperCase()}`;
        console.log('Color changed to: ' + color);
    } catch (error) {
        document.getElementById('colorInput').value = '';
        console.log('Error: ' + error);
    }
}