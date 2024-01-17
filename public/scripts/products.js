async function addProduct(){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const accessToken = localStorage.getItem('accessToken');
    const type = document.getElementById('type').value;

    const data = { name, price, description, image, accessToken, type };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

     await fetch('/products', options)
        .then(res => res.json())
        .then(data => {
            if(data == true){
                alert("Product added successfully."); 
                window.location.reload();
            }else{
                alert("Error adding product.");
            }
        })
        .catch(error => console.error('Error:', error));

}

function getProduct(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    fetch('/menu/api', options)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById('productsTable');
            for(let i = 0; i < data.length; i++){
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                td1.textContent = data[i].name;
                const td2 = document.createElement('td');
                td2.textContent = data[i].price;
                const td3 = document.createElement('td');
                td3.textContent = data[i].description;
                const td4 = document.createElement('td');
                td4.textContent = data[i].type;
                const td5 = document.createElement('td');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                button.onclick = function(){
                    deleteProduct(data[i].id);
                }
                td5.appendChild(button);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                table.appendChild(tr);
            }
        });
}

function deleteProduct(id){
    const accessToken = localStorage.getItem('accessToken');

    const data = { id, accessToken };
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch('/products/api', options)
        .then(res => res.json())
        .then(data => {
            if(data == true){
                alert("Product deleted successfully."); 
                window.location.reload();
            }else{
                alert("Error deleting product.");
            }
        })
        .catch(error => console.error('Error:', error));
}