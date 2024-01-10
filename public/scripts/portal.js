
function decode(){
    const accessToken = localStorage.getItem('accessToken');
    const decoded = atob(accessToken).split(':');
    return decoded;
}

function Welcome(){
    const decoded = decode();
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Welcome ' + decoded[1];
    h1Element.id = 'Welcome';
    h1Element.className = 'userName';

    const centerElement = document.createElement('center');
    centerElement.appendChild(h1Element);

    document.body.appendChild(centerElement);
}

if(localStorage.getItem('accessToken') === null){
    window.location.href = "/";
}

async function logout(){
    localStorage.removeItem('accessToken');
    window.location.href = "/";
}

if(decode()[3] == 0){
    const AdminButton = getElementById('AdminButton');
    AdminButton.style.display = 'none';
}else if(decode()[3] == 1){
    const AdminButton = getElementById('AdminButton');
    AdminButton.style.display = 'block';
}

function AdminPage(){
    window.location.href = "/admin";
}

