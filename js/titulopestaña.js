document.addEventListener("DOMContentLoaded", function () {

    const tituloOriginal = document.title;

    let temporizadorRestauracion = null;

    function obtenerIdioma() {
        return document.documentElement.lang === "en" ? "en" : "es";
    }

    function cancelarRestauracion() {
        if (temporizadorRestauracion !== null) {
            clearTimeout(temporizadorRestauracion);
            temporizadorRestauracion = null;
        }
    }

    // Cuando el usuario cambia de pestaña
    window.addEventListener("blur", function () {

        cancelarRestauracion();

        document.title = obtenerIdioma() === "en"
            ? "Don't go!"
            : "¡No te vayas!";

    });

    // Cuando el usuario vuelve a la pestaña
    window.addEventListener("focus", function () {

        cancelarRestauracion();

        document.title = obtenerIdioma() === "en"
            ? "Welcome back!"
            : "¡Bienvenido de vuelta!";

        temporizadorRestauracion = setTimeout(function () {

            document.title = tituloOriginal;
            temporizadorRestauracion = null;

        }, 2000);

    });

});
