// a variável video é um objeto json
const videos = [
  {"id": "ZTQcJWixB1k",
    "titulo": "Fetch API in JavaScript for AJAX Developers"
  },
  {"id": "cuEtnrL9-H0",
    "titulo": "Learn Fetch API In 6 Minutes"
  },
  {"id": "BIz02qY5BRA",
    "titulo": "Responsive Web Design Tutorial"
  }
];

let lista = document.querySelector("#lista-videos");
let video = document.querySelector("#youtube");

for (let i=0; i<videos.length; i++) {
  let li = document.createElement("li");
  let imagem = document.createElement("img");
  imagem.setAttribute("src", "http://i3.ytimg.com/vi/"+videos[i].id+"/default.jpg");
  li.appendChild(imagem);
  let texto = document.createTextNode(videos[i].titulo);
  li.appendChild(texto);
  lista.appendChild(li);
	/* OU Equivalente:
  let li = document.createElement("li");
  li.innerHTML = "<img src='http://i3.ytimg.com/vi/"+videos[i].id+"/default.jpg'>"+videos[i].titulo;
  */
 li.addEventListener("click", function(){
  //<iframe src='http://www.youtube.com/embed/ID_DO_VIDEO' width=NNNpx height=MMMpx>
  let janela = document.createElement("iframe");
  janela.setAttribute("src", "http://www.youtube.com/embed/"+videos[i].id);
  janela.setAttribute("width", "500");
  janela.setAttribute("height", "300");
  video.innerHTML = "";
  video.appendChild(janela);
 });
}
