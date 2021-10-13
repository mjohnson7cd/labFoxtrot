$(function() {
    var i = 0;
    var txt = 'Cyber Security & Software Design'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("container").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

});