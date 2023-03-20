document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;

    document.getElementById("listCookies").innerHTML += "<h3>Apagar cookie persistente</h3>";
    deleteCookie("cookiePersistente");

    document.getElementById("listCookies").innerHTML += "<h3>Ler cookies</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${document.cookie}</p>`;
    
    //JSON
    document.getElementById("listCookies").innerHTML += "<h3>Ler cookie de json</h3>";
    document.getElementById("listCookies").innerHTML += `<p>${getCookie("cookieJson")}</p>`;
})