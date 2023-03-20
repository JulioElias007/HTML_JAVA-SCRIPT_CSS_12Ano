<?php
/*
Este programa responde a um pedido GET que contenha um
parâmetro de nome 'cod' que contenha um código de produto.
O programa responde com um parâmetro de nome 'preco' que
contém o preço desse produto, e um parâmetro de nome
'cat' com a categoria a que pertenço o produto.
A categoria pode ser "Portáteis", "Componentes" ou "Software"
*/

if(isset($_GET["cod"]) && !empty($_GET["cod"])){                //se existir um dado chamado cod e não for vazio
  http_response_code(200);                                      //OK
  $preco = rand(10, 1000);                                      //gerado aleatoriamente
  $categorias = array("Portáteis", "Componentes", "Software");
  $cat = $categorias[rand(0, 2)];                               //gerado aleatoriamente
  echo json_encode(array("preco"=>$preco, "cat"=>$cat));
}
else{
  http_response_code(400);                                      //Bad Request
}

/* ANOTAÇÕES  
 para fazer pedidos:
    -? valores separados por & (nesse caso cod) 
          
*/
?>
