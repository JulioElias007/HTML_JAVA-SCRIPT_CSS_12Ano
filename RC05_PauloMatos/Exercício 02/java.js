var j='O';
        function sinal(x){
            if (document.getElementById('a'+x).innerHTML == '&nbsp;'){
                if (j=='O'){
                    document.getElementById('a'+x).innerHTML = j;
                    j = 'X';
                }
                else{
                    document.getElementById('a'+x).innerHTML = j;
                    j = 'O';
                }
            }
            else{
                alert("Casa já ocupada");
            }
        }
/**h = document.createElement("p");
h.textContent = 'Vitoria do' + jogador;
resultado.appendChild(h);*/
