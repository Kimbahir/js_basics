let userDb = [
    { id: 1, name: 'John', age: 22 },
    { id: 2, name: 'Jane', age: 33 },
    { id: 3, name: 'Doe', age: 44 },
    { id: 4, name: 'Smith', age: 55 },
    { id: 5, name: 'Doe', age: 66 }
] 

async function addUser() {
    
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    
    let max_id = -1;
    userDb.forEach(user => {
        if (user.id > max_id) {
            max_id = user.id
        }
    });
    let id = max_id + 1
    userDb.push({ id, name, age })

    refreshUserList()

    return id
}

async function deleteUser(id) {
    let index = userDb.findIndex(user => user.id === id)
    if (index === -1) {
        throw new Error('User not found')
    }
    userDb.splice(index, 1)
}

async function editUser() {
    let id = parseInt(document.getElementById('edit_id').value, 10)
    let name = document.getElementById('edit_name').value
    let age = parseInt(document.getElementById('edit_age').value)

    console.log('editUser', id, name, age)

    await updateUser(id, name, age)

    let divEditUser = document.getElementById('divEditUser')
    divEditUser.style.display = 'none'

    refreshUserList()
}

async function updateUser(id, name, age) {
    let index = userDb.findIndex(user => user.id === id);
    if (index === -1) {
        throw new Error('User not found')
    }
    userDb[index] = { id, name, age }
}

async function getUser(id) {
    return userDb.find(user => user.id === id)
}

async function refreshUserList() {
    const table = document.getElementById('user-list')

    // clear existing table
    table.innerHTML = ''

    userDb.forEach(user => {
        let row = table.appendChild(document.createElement('tr'))
        let cell = row.appendChild(document.createElement('td'))
        cell.textContent = user.id
        cell = row.appendChild(document.createElement('td'))
        cell.textContent = user.name
        cell = row.appendChild(document.createElement('td'))
        cell.textContent = user.age
        cell = row.appendChild(document.createElement('td'))
        let button = cell.appendChild(document.createElement('button'))
        button.textContent = 'Delete'
        button.onclick = () => {
            deleteUser(user.id)
            refreshUserList()
        }
        button = cell.appendChild(document.createElement('button'))
        button.textContent = 'Edit'
        button.onclick = () => {
            let edit_id = document.getElementById('edit_id')
            let edit_name = document.getElementById('edit_name')
            let edit_age = document.getElementById('edit_age')
            edit_id.value = user.id
            edit_name.value = user.name
            edit_age.value = user.age
            let divEditUser = document.getElementById('divEditUser')
            divEditUser.style.display = 'block'
        }
    }) 
}

window.addEventListener('keydown', function (e) {
    const info = this.document.getElementById('info')
    if (e.key === 'Enter' && e.altKey ) {
        info.textContent += 'Alt + Enter key pressed\n';
    } else if (e.key === 'n' && e.altKey) {
        info.textContent += 'New doc\n';
    }
});

document.getElementById('name').addEventListener('input', function (e) {
    console.log('input event', e.target.value);
    let info = document.getElementById('info');
    info.textContent = e.target.value;
    console.log(`info is ${info.textContent}`)
});