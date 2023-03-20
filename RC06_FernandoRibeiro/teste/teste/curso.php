<?php
/*
Este programa responde a um pedido GET que inclua um
parâmetro de nome 'aluno' que contenha um número de aluno.
O programa responde com um parâmetro de nome 'curso' que
contém as iniciais do curso à qual esse aluno pertence, e
um parâmetro de nome 'media' contendo a média de curso
calculada para esse aluno.
*/

if(isset($_GET["aluno"]) && !empty($_GET["aluno"])){
  $media = rand(10, 20); //gerado aleatoriamente
  $cursos = array("TDD3D", "TF", "TGEI", "TGPSI", "TM");
  $curso = $cursos[rand(0, count($cursos)-1)]; //gerado aleatoriamente
  http_response_code(200); //OK
  echo json_encode(array("curso"=>$curso, "media"=>$media));
}
else{
  http_response_code(400); //Bad Request
}
?>