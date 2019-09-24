let menuButton = document.getElementById("menuButton");
let menuInfo = document.getElementById("menuInfo");
let menuCheck = false;

let superior = document.getElementById("superior");
let inferior = document.getElementById("inferior");
let anterior = document.getElementById("anterior");
let posterior = document.getElementById("posterior");
let medial = document.getElementById("medial");

let superior1 = document.getElementById("superior1");
let inferior1 = document.getElementById("inferior1");
let anterior1 = document.getElementById("anterior1");
let posterior1 = document.getElementById("posterior1");
let medial1 = document.getElementById("medial1");

superior.style.display = "none";
inferior.style.display = "none";
anterior.style.display = "none";
posterior.style.display = "none";
medial.style.display = "none";

function hideText(text) {
    if (menuCheck == true) {
        superior.style.display = "none";
        inferior.style.display = "none";
        anterior.style.display = "none";
        posterior.style.display = "none";
        medial.style.display = "none";
        text.style.display = "block";
    } else if (menuCheck == false) {
        superior.style.display = "none";
        inferior.style.display = "none";
        anterior.style.display = "none";
        posterior.style.display = "none";
        medial.style.display = "none";
    }
}


function menu() {
    if (menuCheck == false) {
        menuInfo.style.display = "block";
        menuCheck = true;
    } else if (menuCheck == true) {
        menuInfo.style.display = "none";
        menuCheck = false;
    }
}

function superior2() {
    hideText(superior)
}
function inferior2() {
    hideText(inferior)
}
function anterior2() {
    hideText(anterior)
}
function posterior2() {
    hideText(posterior)
}
function medial2() {
    hideText(medial)
}

superior1.addEventListener('click', superior2);
inferior1.addEventListener('click', inferior2);
anterior1.addEventListener('click', anterior2);
posterior1.addEventListener('click', posterior2);
medial1.addEventListener('click', medial2);

menuButton.addEventListener('click', menu)