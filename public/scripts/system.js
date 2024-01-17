function processInput(){
    var input = document.getElementById("inputField").value;
    var output = document.getElementById("outputBlock");

    const data = { input };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

     fetch('/system/run', options)
        .then(res => res.text())
        .then(data => {
            output.textContent = data;
        })
        .catch(error => output.textContent = error);
}