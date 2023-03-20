let guardar = document.querySelector("form button");
guardar.addEventListener("click", function(){
    let codigo = document.querySelector("#cod").value;
    let quantidade = document.querySelector("#quant").value;
    fetch("http://localhost/RC06_FernandoRibeiro/exercicio_7/preco.php?cod="+codigo)
    .then(resposta => resposta.json())
    .then(dados => {
        let lista="";
        switch(dados.cat){
            case 'Componentes':
                lista = document.querySelector("#componentes ul");
                break;
            case 'Software':
                lista = document.querySelector("#software ul");
                break;
            case 'Portáteis':
                lista = document.querySelector("#portateis ul");
                break;
        }
        let linhaProduto = document.createElement("li");
        linhaProduto.textContent = "Produto "+codigo+", "+quantidade+" unidades, preço "+dados.preco;
        lista.appendChild(linhaProduto);
        if(quantidade<3){
            linhaProduto.classList.add("vermelho");
        }
    });
});