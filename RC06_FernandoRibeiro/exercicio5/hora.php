<?php
//JSON simples
//echo json_encode(date("H:i:s"));

//JSON com tag
echo json_encode(array("hora"=>date("H:i:s")));

//JSON tag com três campos separados
//echo json_encode(array("horas"=>date("H"), "minutos"=>date("i"), "segundos"=>date("s")));
?>