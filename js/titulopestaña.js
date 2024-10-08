titulo = document.title;

window.onblur = function() {
    document.title = "¡No te vayas!";
}
window.onfocus = function() {
    document.title = "¡Bienvenido de vuelta!";
    setTimeout(function(){
        document.title = titulo; 
    }, 2000);
}    