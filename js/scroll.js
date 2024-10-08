document.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    let windowHeight = window.innerHeight;
    if (currentScroll > 1) {
        let sobreMiSection = document.querySelector("#sobremi").offsetTop;
        window.scrollTo({
            top: sobreMiSection,
            behavior: "smooth"
        });
    }
});
