document.addEventListener("DOMContentLoaded", function(){
    let h4 = document.querySelector("#apresentacao h4");
    let h5 = document.querySelector("#apresentacao h5");
    let h4Servidor = document.querySelector("#instrucoes h4");
    mes_name = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto","setembro", "outubro", "novembro", "dezembro");
    window.setInterval(function(){
        let agora = new Date();
        h4.textContent = agora.toLocaleTimeString();
        //h5.textContent = agora.toLocaleDateString( agora.getDate() + mes_name[agora.getMonth()]);
        //console.log(agora.getMonth());
        h5.textContent = (agora.getDate() +", " + mes_name[agora.getMonth()]);
    }, 500);
    window.setInterval(function(){
        fetch("http://localhost/RC06_FernandoRibeiro/exercicio6/hora.php")
        .then(resposta => resposta.json())
        .then(dados => h4Servidor.textContent = dados.hora);
        //#region indiferente estar aqui
        fetch("http://localhost/RC06_FernandoRibeiro/exercicio6/data.php")
        .then(resposta => resposta.json())
        .then(dados => h4Servidor.textContent += "" + dados.data); 
        //#endregion
    }, 500);
});



