//desabilida (clique direito do mouse)

var message = "function disabled";

function rtclickcheck(keyp) {
    if (navigator.appName == "Netscape" && keyp.which == 3) {
        alert(message);
        return false;
    }

    if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
        alert(message);
        return false;
    }
}

document.onmousedown = rtclickcheck;


//desabilita atalho (ctrl + U)
document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 85)) {
        alert("Desabilitado!")
        return false;
    }
};