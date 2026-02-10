var darkmode = localStorage.getItem('darkmode') === 'true';
// ^ this is some weird demon shit that makes it work somehow
const click = new Audio('../sounds/click.mp3');

function lighttoggle() {
    click.currentTime = 0.07;
    click.play();
    invertlights();
    refresh();
}

function invertlights() {
if (darkmode) {
    darkmode = false;
}
    else {
        darkmode = true;
        
    }
}

function refresh() {
    
    if (darkmode) {
    document.body.id ="DARK";
    document.getElementById("darkmode").src = "../images/darkmode.png";
    
}
    else {
    document.body.id = "LIGHT";
    document.getElementById("darkmode").src = "../images/lightmode.png";
    }
    localStorage.setItem('darkmode',darkmode);
    
}
document.getElementById("darkmode").addEventListener("click", lighttoggle);
refresh();