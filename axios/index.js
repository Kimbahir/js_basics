const api = 'https://reqres.in/api';

async function listUsers() {
    let result = await axios.get(api + '/users?page=2');
    let userList = document.getElementById('userList');
    userList.innerHTML = '';

    let users = result.data;
    console.log(users);

    users.data.forEach(user => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(user.first_name + user.last_name));
        userList.appendChild(li);
    });
}