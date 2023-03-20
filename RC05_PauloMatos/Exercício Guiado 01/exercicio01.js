    alert("Olá mundo!");
    
    var data = new Date();
    var dataLocal = data.toLocaleString();
    document.getElementById("rodape").innerHTML = `<h3> ${data} </h3>`
    document.getElementById("titulo").innerText += '! Agora no browser !<hr>';

    for(var i=0; i<=5; i++)
    {
        var randomWidth = randomIntFromInterval(200, 600);
        var randomHeight = randomIntFromInterval(200, 600);

        var novaimg = document.createElement("img");

        novaimg.src = `https://loremflickr.com/${randomWidth}/${randomHeight}/cat`;
        document.getElementById("cat").appendChild(novaimg);
    }

    document.bgColor = getRandomRGBColor();