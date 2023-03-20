let guardar = document.querySelector("#new");
guardar.addEventListener("click", function(){
    let aluno = document.querySelector("#aluno").value;
    fetch("http://localhost/RC06_FernandoRibeiro/teste/curso.php?aluno="+aluno)
    .then(resposta => resposta.json())
    .then(dados => {
        let lista="";
        switch(dados.curso){
            case 'TDD3D':
                lista = document.querySelector("#TDD3D ul");
                break;
            case 'TF':
                lista = document.querySelector("#TF ul");
                break;
            case 'TGEI':
                lista = document.querySelector("#TGEI ul");
                break;
            case 'TGPSI':
                lista = document.querySelector("#TGPSI ul");
                break;
            case 'TM':
                lista = document.querySelector("#TM ul");
                break;
        }
        let dadosaluno = document.createElement("li");
        dadosaluno.textContent = "Aluno "+aluno+", "+dados.media;
        lista.appendChild(dadosaluno);
        if(dados.media>14 + dados.media<18){ 
            dadosaluno.classList.add("azul_claro");
        }else if(dados.media>=18){
            dadosaluno.classList.add("azul_escuro");
        }
    })
})

