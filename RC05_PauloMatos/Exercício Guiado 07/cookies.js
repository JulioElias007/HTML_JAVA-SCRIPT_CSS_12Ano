function setSessionCookie(cookieName, cookieValue){
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue);
}

function setSessionCookie(cookieName, cookieValue, daysValid){
    var d = new Date();
    d.setTime(d.getTime() + (daysValid*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";" + expires + ";path=/";
}

function getCookie(cookieName){
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i];
        while(c.charAt(0) == '')
        {
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0)
        {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}

function deleteCookie(cookieName){
    setCookie(cookieName, "", -1);
}