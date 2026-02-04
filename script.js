let darkmode = false;
let darkcolor = "#000";
let lightcolor = "#fff";
let darkbackground = "#fff";
let lightbackground = "#000";
let darkaccent = "#f00";
let lightaccent = darkaccent;
const click = new Audio('click.mp3');


function lighttoggle() {
    let light = document.getElementById("darkmode");
    click.currentTime = 0.07;
    click.play();
    invertlights();
    refresh();
}

function invertlights() {
if (darkmode) {darkmode = false;
}
    else {darkmode = true;
    }
}

function refresh() {
    let elements = document.querySelectorAll("#display");
    elementslop(elements);

    if (darkmode) {
    document.getElementById("darkmode").src = "lightmode.png";
}
    else {
    document.getElementById("darkmode").src = "darkmode.png";
    }
    
    
}
function elementslop(elements) {
    
    const color = darkmode ? darkcolor : lightcolor;
    const background = darkmode ? darkbackground : lightbackground;
    const accent = darkmode ? darkaccent : lightaccent;

    for (const { style: s } of elements) {
    s.color = color;
    s.borderColor = background;
    s.background = background;
    }
    
    for (const { style: s } of document.querySelectorAll("a")) {
        s.color = accent;
    }
}

refresh();