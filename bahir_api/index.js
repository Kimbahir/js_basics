const api = 'http://localhost/images';

async function listUsers() {
    console.log('Starting')
    let admin_key = document.getElementById('admin-key').value;
    let result = await axios.get(api + '/?admin_key=' + admin_key);
    console.log('We got results');
    let userList = document.getElementById('userList');
    userList.innerHTML = '';

    let images = result.data;
    console.log(images);

    images.data.forEach(image => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode('name:' + image.name + ' | ' + 'shared_with:' + image.shared_with));
        userList.appendChild(li);
    });
}