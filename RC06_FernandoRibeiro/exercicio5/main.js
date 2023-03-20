document.addEventListener("DOMContentLoaded", function(){
    let h4 = document.querySelector("#apresentacao h4");
    let h4Servidor = document.querySelector("#instrucoes h4");
    window.setInterval(function(){
        let agora = new Date();
        h4.textContent = agora.toLocaleTimeString();
    }, 500);
    window.setInterval(function(){
        fetch("http://localhost/RC06-5/hora.php")
        .then(resposta => resposta.json())
        .then(dados => h4Servidor.textContent = dados.hora);
    }, 500);
});



