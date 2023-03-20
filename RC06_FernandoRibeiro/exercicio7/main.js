document.addEventListener("DOMContentLoaded", () =>{   
    let categoria;

    const btn = document.getElementById("submit").addEventListener("click", function(){  

        var codigo = document.getElementById("codigo").value;
        var quantidade = document.getElementById("quantidade").value;
        
        var lPor = document.getElementById("portateis");
        var lCom = document.getElementById("componentes");
        var lSof = document.getElementById("software");        

        fetch("http://localhost/loja/preco.php?cod=" + codigo)
        .then(resposta => resposta.json())
        .then(prod => {
            categoria = prod.cat;
            preco = prod.preco
        })           
        .then(function(){
            var newItem = document.createElement("li");           
           
            if(quantidade<3)
            {
                newItem.style.color= "blue";
            }

            if(categoria == "Portáteis"){
                
                newItem.innerHTML = "codigo:" + codigo + ", quantidade:" + quantidade + ", preço: " + preco + ", categoria:" + categoria;                
                lPor.appendChild(newItem);                
            }          
            else if(categoria == "Componentes"){
                
                newItem.innerHTML = "codigo:" + codigo + ", quantidade:" + quantidade + ", preço: " + preco + ", categoria:" + categoria;
                lCom.appendChild(newItem);
            } 
            else{
                
                newItem.innerHTML = "codigo:" + codigo + ", quantidade:" + quantidade + ", preço: " + preco + ", categoria:" + categoria;
                lSof.appendChild(newItem);
            } 
        });         
    });
})


