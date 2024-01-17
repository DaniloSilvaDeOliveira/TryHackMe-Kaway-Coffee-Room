
function addAdmin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const superAdmin = document.getElementById("superAdmin").checked;
    const accessToken = localStorage.getItem('accessToken');


    const data = { username, password, superAdmin, accessToken };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/manager', options)
        .then(res => res.json())
        .then(data => {
            if(data === "success"){
                alert("Admin added successfully.");
                window.location.reload();
            } else {
                alert("Error adding admin.");
            }
        })
        .catch(error => console.error('Error:', error));
}

function getAdmins(){
    const accessToken = localStorage.getItem('accessToken');

    const data = { accessToken };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch('/manager/api', options)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById('adminsTable');
            for(let i = 0; i < data.length; i++){
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                td1.textContent = data[i].name;
                const td2 = document.createElement('td');
                td2.textContent = data[i].superAdmin;
                const td3 = document.createElement('td');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                button.onclick = function(){
                    deleteAdmin(data[i].id);
                }
                td3.appendChild(button);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
            }
        })
        .catch(error => console.error('Error:', error));
}

function deleteAdmin(id){
    const accessToken = localStorage.getItem('accessToken');

    const data = { id, accessToken };
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch('/manager/api', options)
        .then(res => res.json())
        .then(data => {
            if(data === "success"){
                alert("Admin deleted successfully.");
                window.location.reload();
            } else {
                alert("Error deleting admin.");
            }
        })
        .catch(error => console.error('Error:', error));
}