const modoscuro = document.getElementById('modoscuro');
modoscuro.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');
    const gmailIcon = document.getElementById('icongmail');
    const githubIcon = document.getElementById('icongithub');
    const githubIcon2 = document.getElementById('icongithubtec');
    const linkedinIcon = document.getElementById('iconlikedln');
    if (document.body.classList.contains('darkmode')) {
        gmailIcon.src = 'images/gmail2.png';
        githubIcon.src = 'images/github2.png';
        githubIcon2.src = 'images/github2.png';
        linkedinIcon.src = 'images/linkedin2.png';
    } else {
        gmailIcon.src = 'images/gmail.png';
        githubIcon.src = 'images/github.png';
        githubIcon2.src = 'images/github.png';
        linkedinIcon.src = 'images/linkedin.png';
    }
});
