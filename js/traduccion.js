const translations = {
    en: {
        greeting: "Hello, I am Domingo",
        viewCV: "View my CV",
        aboutMe: "About me",
        aboutParagraph: "I am passionate about technology and software development. I love learning and working on challenging projects that help me grow professionally. My hobbies include video games, cooking, and exercising.",
        skills: "Skills",
        languages: "Languages",
        frameworks: "Frameworks and Libraries",
        tools: "Technologies and Tools"
    },
    es: {
        greeting: "Hola, soy Domingo",
        viewCV: "Ver mi CV",
        aboutMe: "Sobre mí",
        aboutParagraph: "Soy un apasionado de la tecnología y el desarrollo de software. Me encanta aprender y trabajar en proyectos desafiantes que me permitan crecer profesionalmente. Entre mis aficiones se encuentran los videojuegos, cocinar y hacer ejercicio.",
        skills: "Skills",
        languages: "Lenguajes",
        frameworks: "Frameworks y librerías",
        tools: "Tecnologías y herramientas"
    }
};

const translateToEnglish = () => {
    document.getElementById("escribe").textContent = translations.en.greeting;
    document.querySelector("#cv a").textContent = translations.en.viewCV;
    document.querySelector("#sobremi h1").textContent = translations.en.aboutMe;
    document.getElementById("miparrafo").textContent = translations.en.aboutParagraph;
    document.querySelector("#skills h1").textContent = translations.en.skills;
    document.querySelectorAll("h2")[0].textContent = translations.en.languages;
    document.querySelectorAll("h2")[1].textContent = translations.en.frameworks;
    document.querySelectorAll("h2")[2].textContent = translations.en.tools;
};

const translateToSpanish = () => {
    document.getElementById("escribe").textContent = translations.es.greeting;
    document.querySelector("#cv a").textContent = translations.es.viewCV;
    document.querySelector("#sobremi h1").textContent = translations.es.aboutMe;
    document.getElementById("miparrafo").textContent = translations.es.aboutParagraph;
    document.querySelector("#skills h1").textContent = translations.es.skills;
    document.querySelectorAll("h2")[0].textContent = translations.es.languages;
    document.querySelectorAll("h2")[1].textContent = translations.es.frameworks;
    document.querySelectorAll("h2")[2].textContent = translations.es.tools;
};

// Add event listeners to buttons
document.getElementById("translate-en").addEventListener("click", translateToEnglish);
document.getElementById("translate-es").addEventListener("click", translateToSpanish);
