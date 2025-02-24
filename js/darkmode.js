const modoscuro = document.getElementById('modoscuro');
modoscuro.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
    const githubIcon = document.getElementById('icongithub');
    const githubIcon2 = document.getElementById('icongithubtec');
    if (document.body.classList.contains('darkmode')) {
        githubIcon.src = 'images/github2.png';
        githubIcon2.src = 'images/github2.png';
    } else {
        githubIcon.src = 'images/github.png';
        githubIcon2.src = 'images/github.png';
    }
});
