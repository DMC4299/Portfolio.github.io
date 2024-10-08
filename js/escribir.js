document.addEventListener("DOMContentLoaded", function() {
    const textoelemento = document.getElementById('escribe');
    let index = 0;
    const velocidad = 120;
    let texto = textoelemento.textContent; 
    
    
    textoelemento.textContent = ''; 

    // Función de escritura tipo máquina
    function typeWriter() {
        if (index < texto.length) {
            textoelemento.textContent += texto.charAt(index);
            index++;
            setTimeout(typeWriter, velocidad);
        } else {
            setTimeout(function() {
                textoelemento.textContent = ''; 
                index = 0; 
                typeWriter(); 
            }, 1500);
        }
    }
    function actualizarTexto(nuevoTexto) {
        texto = nuevoTexto; 
        textoelemento.textContent = ''; 
        index = 0; 
        typeWriter();
    }
    typeWriter();
    const translations = {
        en: "Hello, I am Domingo",
        es: "Hola, soy Domingo"
    };
    const translateToEnglish = () => {
        actualizarTexto(translations.en);
    };
    const translateToSpanish = () => {
        actualizarTexto(translations.es);
    };
    document.getElementById("translate-en").addEventListener("click", translateToEnglish);
    document.getElementById("translate-es").addEventListener("click", translateToSpanish);
});
