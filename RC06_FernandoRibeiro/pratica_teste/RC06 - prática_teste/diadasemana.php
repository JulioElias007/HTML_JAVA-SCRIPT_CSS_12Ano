<?php
/*
Este programa responde a um pedido GET que inclua três
parâmetros, de nomes 'dia', 'mes' e 'ano' que contenham
uma data com dia, mês e ano.
O programa responde com um parâmetro de nome 'diadasemana'
que indica em que dia da semana calha o dia recebido.
*/

if(isset($_GET["dia"]) && !empty($_GET["dia"]) &&
   isset($_GET["mes"]) && !empty($_GET["mes"]) &&
   isset($_GET["ano"]) && !empty($_GET["ano"])){
  http_response_code(200); //OK
  echo json_encode(array("diadasemana" => date('l', strtotime($_GET["ano"] . "/" . $_GET["mes"] . "/" . $_GET["dia"]))));
}
else{
  http_response_code(400); //Bad Request
}
?>