var dados = [
    {
        "name":"hero Product",
        "detail":"Lorem ipsum dolor sit amet",
        "price":"99", 
        "hero":"OMG This just came out today!",
        "image":"https://loremflickr.com/320/240/paris"
    },
    {
       "name": "Product 1",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "info" : "This is the latest and greatest product from Derp corp.",
        "image": "https://loremflickr.com/320/240/cat"
    }
];

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;

    //Cookie Sessão
    document.getElementById("listCookies").innerHTML += "<h3>Criar cookie de sessão</h3>";
    setSessionCookie("cookieSessao", `valor sessão-${Date.now()}`);

    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;

    //Cookie Persistente
    document.getElementById("listCookies").innerHTML += "<h3>Criar cookie persistente de 1 dia</h3>";
    setSessionCookie("cookiePersistente", `valor persistente-${Date.now()}`);
    
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;

    //Cookie Sessão
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookie de sessão</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${getCookie("cookieSessao")}</p>`;

    //Cookie Persistente
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookie de sessão</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${getCookie("cookiePersistente")}</p>`;
    
    //Cookie JSON
    document.getElementById("listCookies").innerHTML += "<h3>Criar cookie persistente com JSON</h3>";
    setCookie("cookieJSON", JSON.stringify(dados));

    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;

    document.getElementById("listCookies").innerHTML += "<h3>Ler cookie de json</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${getCookie("cookieJson")}</p>`;
});