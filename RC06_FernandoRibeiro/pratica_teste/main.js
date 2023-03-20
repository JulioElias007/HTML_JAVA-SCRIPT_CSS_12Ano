const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const lista = document.querySelector("#diasuteis");
document.querySelector("form button").addEventListener("click", function(){
  fetch("diadasemana.php?ano="+ano.value+"&mes="+mes.value+"&dia="+dia.value)
  .then(resposta => resposta.json())
  .then(dados => {
    switch(dados.diadasemana){
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        let diautil = document.createElement("li");
        diautil.textContent = dia.value+"/"+mes.value+"/"+ano.value;
        lista.appendChild(diautil);
        const agora = new Date();
        if(agora.getMonth()+1 == mes.value){ // 0 corresponde a janeiro, logo soma-se 1
          diautil.textContent += " (este mês)";
          diautil.classList.add("vermelho");
        }
        else if(agora.getMonth()+2 == mes.value || agora.getMonth() == 11 && mes.value == 1){
          diautil.textContent += " (próximo mês)";
          diautil.classList.add("amarelo");
        }
        break;
    }
  });
});