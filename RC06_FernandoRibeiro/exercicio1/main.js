/*Versão simples
let gato = document.querySelector("#cat1");
gato.addEventListener("click", selectcat);

function selectcat(event){
    style.marginLeft: 30px;
    setTimeout(() => {  this.style.margin = "0px"; }, 1000); //funciona como um sleep
    setTimeout(() => {  this.style.border = "0px"; }, 1000);
}*/

//Versão rapida de escrever
document.querySelectorAll("#apresentacao img").forEach(function(elemento){
elemento.addEventListener("click", function(evento){
this.classList.toggle("select");
});
});