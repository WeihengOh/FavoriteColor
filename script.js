/* change the background color, displayed hexcode, and (in the future) the text color */
function changeBackground(color) {
    document.body.style.background = color;
}
function changeHexcode(hexcode) {
    document.getElementById("mainLine").innerHTML = hexcode;
}

/* functions called in index.html,  generates a random green and and random red color*/
function generateGreen() {
    green = randomColor(138, 154, 91);
    changeBackground(green);    
    changeHexcode(green);
}
function generateRed() {
    red = randomRed();
    changeBackground(red);
    changeHexcode(red);
}

function randomGreen() {
    const r = 138 + Math.floor(Math.random()*11)-5;
    const g = 154 + Math.floor(Math.random()*11)-5;
    const b = 91 + Math.floor(Math.random()*11)-5;
    return rgbToHex(r, g, b)
}
function randomRed() {
    const r = 136 + Math.floor(Math.random()*11)-5;
    const g = 8 + Math.floor(Math.random()*11)-5;
    const b = 8 + Math.floor(Math.random()*11)-5;
    return rgbToHex(r, g, b)
}
function randomColor(r1, g1, b1) {
    const range = 20;
    const r2 = r1 + Math.floor(Math.random()*(range+1)-range);
    const g2 = g1 + Math.floor(Math.random()*(range+1)-range);
    const b2 = b1 + Math.floor(Math.random()*(range+1)-range);
    return rgbToHex(r2, g2, b2)
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "32") {
        generateGreen();
        document.getElementById("subLine").innerHTML = null;
    }
}
