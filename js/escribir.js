
document.addEventListener("DOMContentLoaded", function () {

    const textoElemento = document.getElementById("escribe");

    if (!textoElemento) {
        return;
    }

    let textoActual = textoElemento.textContent;
    let indice = 0;
    let temporizador = null;

    const velocidad = 120;
    const pausaFinal = 1500;

    // Detiene cualquier animación anterior.
    function detenerAnimacion() {
        if (temporizador !== null) {
            clearTimeout(temporizador);
            temporizador = null;
        }
    }

    // Animación de escritura.
    function escribir() {

        if (indice < textoActual.length) {

            textoElemento.textContent += textoActual.charAt(indice);

            indice++;

            temporizador = setTimeout(escribir, velocidad);

        } else {

            temporizador = setTimeout(function () {

                textoElemento.textContent = "";
                indice = 0;

                escribir();

            }, pausaFinal);
        }
    }

    // Permite cambiar el texto desde traduccion.js.
    function actualizarTexto(nuevoTexto) {

        detenerAnimacion();

        textoActual = nuevoTexto;
        indice = 0;

        textoElemento.textContent = "";

        escribir();
    }

    // Función pública para el sistema de traducción.
    window.actualizarSaludo = actualizarTexto;

    // Iniciar animación.
    textoElemento.textContent = "";
    escribir();

});
