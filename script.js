/* change the background color, displayed hexcode, and (in the future) the text color */
function changeBackground(color) {
    document.body.style.background = color;
}
function changeHexcode(hexcode) {
    document.getElementById("mainLine").innerHTML = hexcode;
}

/* functions called in index.html,  generates a random green and and random red color*/
function generateGreen() {
    green = randomColor(138, 154, 91, 20);
    changeBackground(green);    
    changeHexcode(green);
}
function generateRed() {
    red = randomColor(136, 8, 8, 30);
    changeBackground(red);
    changeHexcode(red);
}

function randomColor(r, g, b, range) {
    const initial = [r, g, b];
    var newColor = [0, 0, 0];

    for (let i = 0; i < initial.length; i++) {
        do {
            newColor[i] = initial[i] + Math.floor(Math.random()*(range+1)-range);
        } while (!inRange(newColor[i]))
    }

    return rgbToHex(newColor[0], newColor[1], newColor[2]);
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

function inRange(value) {
    if (value < 1 || value > 255) return false;
    return true;
}
