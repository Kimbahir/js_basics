let username

document.getElementById('myButton').onclick = function() {
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`;
    console.log(username)
}