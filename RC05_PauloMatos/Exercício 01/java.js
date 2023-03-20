function calcOper(oper) {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    let resultado = document.querySelector("#resultado");

    if (oper == "somar") {
       var valort = parseFloat(valor1) + parseFloat(valor2);
       h = document.createElement("p");
       h.textContent = valor1 + '+' + valor2 + '=' + valort;
       resultado.appendChild(h);
    } else {
       if (oper == "subtrair") {
          var valort = valor1 - valor2;
          h = document.createElement("p");
          h.textContent = valor1 + '-' + valor2 + '=' + valort;
          resultado.appendChild(h);
       } else {
          if (oper == "multiplicar") {
            var valort = valor1 * valor2;
            h = document.createElement("p");
            h.textContent = valor1 + '*' + valor2 + '=' + valort;
            resultado.appendChild(h);
          } else {
            var valort = valor1 / valor2;
            h = document.createElement("p");
            h.textContent = valor1 + '/' + valor2 + '=' + valort;
            resultado.appendChild(h);
          }
       }
    }
}