
function AdminPage(){
    window.location.href = '/manager';
}

function ProductsPage(){
    window.location.href = '/products';
}

function SystemPage(){
    window.location.href = '/system';
}

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
function passButtons(){
    const AdminButton = document.getElementById('AdminButton');
    const SystemButton = document.getElementById('SystemButton');
    if(decode()[3] == 0){
        AdminButton.style.display = 'none';
        SystemButton.style.display = 'none';
    }
}



async function logout(){
    localStorage.removeItem('accessToken');
    window.location.href = "/";
}



