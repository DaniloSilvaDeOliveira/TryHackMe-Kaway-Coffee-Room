
function getTortas() {

    const imgNull = "/public/images/produtos/null.jpeg";
    const targetElement = document.getElementById('divTorta');
    fetch('/menu/api').then((resposta) => {
        resposta.json().then((dados) => {
            dados.forEach((item) => {
                if(item.type == "Pie"){
                    if(item.image == null){
                        constructCards(item.name,item.price,item.description,imgNull,targetElement);
                    }else{
                        constructCards(item.name,item.price,item.description,item.image,targetElement);
                    }
                
            }
            });
        });
    });

}

function getBolos() {
    
        const imgNull = "/public/images/produtos/null.jpeg";
        const targetElement = document.getElementById('divBolo');
        fetch('/menu/api').then((resposta) => {
            resposta.json().then((dados) => {
                dados.forEach((item) => {
                    if(item.type == "Cake"){
                        if(item.image == null){
                            constructCards(item.name,item.price,item.description,imgNull,targetElement);
                        }else{
                            constructCards(item.name,item.price,item.description,item.image,targetElement);
                        }
                    
                }
                });
            });
        });
    
    }

    function getBebidas() {
        
            const imgNull = "/public/images/produtos/null.jpeg";
            const targetElement = document.getElementById('divBebida');
            fetch('/menu/api').then((resposta) => {
                resposta.json().then((dados) => {
                    dados.forEach((item) => {
                        if(item.type == "Drink"){
                            if(item.image == null){
                                constructCards(item.name,item.price,item.description,imgNull,targetElement);
                            }else{
                                constructCards(item.name,item.price,item.description,item.image,targetElement);
                            }
                        
                    }
                    });
                });
            });
        
        }


function constructCards(nome, preco, descricao, img, targetElement) {

    const produto = document.createElement('div');
    produto.classList.add('produto');
  
    const titulo = document.createElement('h2');
    titulo.textContent = nome;
    produto.appendChild(titulo);
  
    const imagem = document.createElement('img');
    imagem.src = img;
    imagem.alt = descricao;
    produto.appendChild(imagem);
  
    const precoElemento = document.createElement('p');
    precoElemento.textContent = `Preço: R$ ${preco}`;
    produto.appendChild(precoElemento);

    const br = document.createElement('br');
    produto.appendChild(br);
  
    const descricaoElemento = document.createElement('p');
    descricaoElemento.textContent = `Descrição: ${descricao}`;
    produto.appendChild(descricaoElemento);
  
    targetElement.appendChild(produto);

  }










        //guarda os dados da requisição em uma variável
        
        /*const responde = fetch('/cardapio/api');
        responde.then((resposta) => {
            //converte a resposta em json
            const json = resposta.json();
            json.then((dados) => {
                //percorre os dados e cria uma div para cada um
                dados.forEach((item) => {
                    const div = document.createElement('div');
                    const p = document.createElement('p');
                    p.innerHTML = item.preco;
                    div.innerHTML = item.nome;
                    document.body.appendChild(div);
                    document.body.appendChild(p);
                });
            });
        });*/