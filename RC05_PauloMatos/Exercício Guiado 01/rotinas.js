function randomIntFromInterval(min, max)
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()* (max - min)) + min;
}

function getRGBColor(red, green, blue)
{
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function getRandomRGBColor()
{
    var r  = randomIntFromInterval (0, 255);
    var g  = randomIntFromInterval (0, 255);
    var b  = randomIntFromInterval (0, 255);

    return getRGBColor(r,g,b);
}