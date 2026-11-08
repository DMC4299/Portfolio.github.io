
document.addEventListener("DOMContentLoaded", function () {

    const botonModoOscuro = document.getElementById("modoscuro");

    if (!botonModoOscuro) {
        return;
    }

    const iconoGithub = document.getElementById("icongithub");
    const iconoGithubTecnologias = document.getElementById("icongithubtec");

    // Comprobar el idioma actual.
    function obtenerIdioma() {
        return document.documentElement.lang === "en" ? "en" : "es";
    }

    // Actualizar el texto del botón.
    function actualizarBoton() {

        const idioma = obtenerIdioma();
        const modoOscuroActivo = document.body.classList.contains("darkmode");

        if (modoOscuroActivo) {
            botonModoOscuro.textContent =
                idioma === "en" ? "Light Mode" : "Modo Claro";
        } else {
            botonModoOscuro.textContent =
                idioma === "en" ? "Dark Mode" : "Modo Oscuro";
        }
    }

    // Actualizar los iconos de GitHub.
    function actualizarIconos() {

        const modoOscuroActivo = document.body.classList.contains("darkmode");

        const imagen = modoOscuroActivo
            ? "images/github2.png"
            : "images/github.png";

        if (iconoGithub) {
            iconoGithub.src = imagen;
        }

        if (iconoGithubTecnologias) {
            iconoGithubTecnologias.src = imagen;
        }
    }

    // Aplicar el tema.
    function aplicarTema(modoOscuroActivo) {

        document.body.classList.toggle("darkmode", modoOscuroActivo);

        actualizarIconos();
        actualizarBoton();
    }

    // Recuperar el tema guardado.
    let temaGuardado = null;

    try {
        temaGuardado = localStorage.getItem("modoOscuro");
    } catch (error) {
        console.warn("No se pudo recuperar el tema guardado.", error);
    }

    aplicarTema(temaGuardado === "true");

    // Cambiar el tema al pulsar el botón.
    botonModoOscuro.addEventListener("click", function () {

        const activarModoOscuro =
            !document.body.classList.contains("darkmode");

        aplicarTema(activarModoOscuro);

        try {
            localStorage.setItem("modoOscuro", activarModoOscuro);
        } catch (error) {
            console.warn("No se pudo guardar la preferencia del tema.", error);
        }

    });

    // Permitir que traduccion.js actualice el botón.
    window.actualizarTextoModoOscuro = actualizarBoton;

});
