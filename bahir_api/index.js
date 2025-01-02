// const api = 'http://localhost/images';
const api = 'https://bahir.paas.ecit.com/images';

async function listUsers() {
    console.log('Starting')
    let admin_key = document.getElementById('admin-key').value;
    let result = await axios.get(api + '/?admin_key=' + admin_key);
    console.log('We got results');
    let userList = document.getElementById('userList');
    userList.innerHTML = '';

    // read the query parameter PARAM from the userList
    let url = new URL(window.location.href);
    let PARAM = url.searchParams.get('PARAM');

    console.log('PARAM:', PARAM);

    let images = result.data;
    console.log(images);

    images.data.forEach(image => {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.appendChild(document.createTextNode(image.name));
        row.appendChild(name);
        let shared_with = document.createElement('td');
        shared_with.appendChild(document.createTextNode(image.shared_with));
        row.appendChild(shared_with);
        let view = document.createElement('td');
        let viewButton = document.createElement('button');
        viewButton.onclick = function() {
            window.location.href = '/info.html?name=' + image.name + '&admin_key=' + admin_key;
        }
        viewButton.appendChild(document.createTextNode('View'));
        view.appendChild(viewButton);
        row.appendChild(view);
        userList.appendChild(row);
        // let li = document.createElement('li');
        // li.appendChild(document.createTextNode('name:' + image.name + ' | ' + 'shared_with:' + image.shared_with));
        // userList.appendChild(li);
    });
}

async function showImageInfo() {
    console.log('Starting')
    let url = new URL(window.location.href);
    let admin_key = url.searchParams.get('admin_key');
    let name = url.searchParams.get('name');
    let result = await axios.get(api + '/' + name + '/info?admin_key=' + admin_key);
    console.log('We got results: ' + result.data);

    let image_name = document.getElementById('image_name');
    image_name.innerHTML = result.data.name;
    let shared_with = document.getElementById('shared_with');
    shared_with.innerHTML = result.data.shared_with;

    let table = document.getElementById('tblLog');

    console.log('Starting to iterate logs');
    result.data.logs.forEach(log => {
        let row = document.createElement('tr');
        let dt = document.createElement('td');
        dt.appendChild(document.createTextNode(log.datetime));
        row.appendChild(dt);
        let request = document.createElement('td');
        // request.appendChild(document.createTextNode(log.request));
        request.appendChild(document.createTextNode(JSON.stringify(log.request, null, 2)));
        row.appendChild(request);
        table.appendChild(row);
    });
    console.log('Done iterating logs');


}