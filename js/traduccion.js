document.addEventListener("DOMContentLoaded", function () {

    const botonIngles = document.getElementById("translate-en");
    const botonEspanol = document.getElementById("translate-es");

    const traducciones = {
        es: {
            greeting: "Hola, soy Domingo",
            viewCV: "Ver mi CV",
            viewCard: "Ver carta de presentación",
            aboutMe: "Sobre mí",
            aboutParagraph: "Soy una persona apasionada por la tecnología y el desarrollo de software. Me gusta aprender, afrontar nuevos retos y desarrollar soluciones que aporten valor.",
            skills: "Habilidades",
            languages: "Lenguajes",
            frameworks: "Frameworks",
            tools: "Herramientas"
        },

        en: {
            greeting: "Hello, I am Domingo",
            viewCV: "View my CV",
            viewCard: "View my cover letter",
            aboutMe: "About me",
            aboutParagraph: "I am passionate about technology and software development. I enjoy learning, taking on new challenges and developing solutions that provide value.",
            skills: "Skills",
            languages: "Languages",
            frameworks: "Frameworks",
            tools: "Tools"
        }
    };

    function cambiarIdioma(idioma) {

        const textos = traducciones[idioma];

        if (!textos) return;

        // Actualizar idioma del documento
        document.documentElement.lang = idioma;

        // Actualizar saludo animado
        if (typeof window.actualizarSaludo === "function") {
            window.actualizarSaludo(textos.greeting);
        } else {
            const saludo = document.getElementById("escribe");

            if (saludo) {
                saludo.textContent = textos.greeting;
            }
        }

        // Actualizar sección Sobre mí
        const tituloSobreMi = document.getElementById("titulo-sobremi");
        const parrafoSobreMi = document.getElementById("miparrafo");

        if (tituloSobreMi) {
            tituloSobreMi.textContent = textos.aboutMe;
        }

        if (parrafoSobreMi) {
            parrafoSobreMi.textContent = textos.aboutParagraph;
        }

        // Actualizar sección Habilidades
        const tituloSkills = document.getElementById("titulo-skills");
        const tituloLenguajes = document.getElementById("titulo-lenguajes");
        const tituloFrameworks = document.getElementById("titulo-frameworks");
        const tituloHerramientas = document.getElementById("titulo-herramientas");

        if (tituloSkills) {
            tituloSkills.textContent = textos.skills;
        }

        if (tituloLenguajes) {
            tituloLenguajes.textContent = textos.languages;
        }

        if (tituloFrameworks) {
            tituloFrameworks.textContent = textos.frameworks;
        }

        if (tituloHerramientas) {
            tituloHerramientas.textContent = textos.tools;
        }

        // Actualizar enlaces del CV y carta
        const enlacesCV = document.querySelectorAll("#cv a");

        if (enlacesCV.length >= 2) {
            enlacesCV[0].textContent = textos.viewCV;
            enlacesCV[1].textContent = textos.viewCard;
        }

        // Actualizar botón del modo oscuro
        if (typeof window.actualizarTextoModoOscuro === "function") {
            window.actualizarTextoModoOscuro();
        }
    }

    // Eventos de los botones
    if (botonIngles) {
        botonIngles.addEventListener("click", function () {
            cambiarIdioma("en");
        });
    }

    if (botonEspanol) {
        botonEspanol.addEventListener("click", function () {
            cambiarIdioma("es");
        });
    }

    // Idioma inicial
    cambiarIdioma("es");

});
