document.addEventListener('DOMContentLoaded', () => {

    function splictCheck()
    {
        var billAmt = document.getElementById("billamt").value;
        var serviceQual = document.getElementById("serviceQual").value;
        var numOfPeople = document.getElementById("peopleamt").value;

        if(billAmt === "" || serviceQual == 0)
        {
            alert("Por favor, introduza os valores");
            return;
        }
        if(numOfPeople === "" || numOfPeople <= 1)
        {
            numOfPeople = 1;
            document.getElementById("each").style.display = "none";
        }
        else
        {
            document.getElementById("each").style.display = "block";
        }

        var tip = (parseFloat(billAmt) * serviceQual);
        tip = Math.round(tip * 100) / 100;

        var total = (parseFloat(billAmt) + tip) / parseInt(numOfPeople);
        total = Math.round(total*100) / 100;

        total = total.toFixed(2);
        tip = tip.toFixed(2);

        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = tip;
        document.getElementById("value").innerHTML = total;
    }

    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    document.getElementById("calculate").addEventListener("click", splictCheck);
});