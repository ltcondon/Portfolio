$(document).ready(function(){
    $('.parallax').parallax();
});

var app = document.getElementById('typewriter-input');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>Web Developer</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start()
        .typeString('<strong>Entrepreneur</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start()
        .typeString('<strong>Software Engineer</strong>')
    .pauseFor(2500)
    .deleteAll()
    