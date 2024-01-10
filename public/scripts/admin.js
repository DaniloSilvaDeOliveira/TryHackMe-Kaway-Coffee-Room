
if(localStorage.getItem('accessToken') !== null){
    window.location.href = "/admin/portal";
}

async function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const error = document.getElementById('error');
    const data = {
        username: username.value,
        password: password.value
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    
    await fetch('admin', options).then(res => res.json()).then(res => {
        if(res[0] === undefined){
            error.style.display = 'block';
        }else{
            const accessToken = btoa(res[0].id + ':' + res[0].name + ':' + res[0].password + ':' + res[0].superAdmin);
            localStorage.setItem('accessToken', accessToken);
            window.location.href = "/admin/portal";
        }
    });
    
}