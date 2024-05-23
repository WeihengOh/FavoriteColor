/* change the background color, displayed hexcode, and (in the future) the text color */
function changeBackground(color) {
    document.body.style.background = color;
}
function changeHexcode(hexcode) {
    document.getElementById("mainLine").innerHTML = hexcode;
}

/* functions called to generate a random green and and random red color*/
function generateGreen() {
    green = randomColor(138, 154, 91, 20);
    changeBackground(green);    
    changeHexcode(green);
    document.getElementById("subLine").innerHTML = null;
}
function generateRed() {
    red = randomColor(136, 8, 8, 30);
    changeBackground(red);
    changeHexcode(red);
    document.getElementById("subLine").innerHTML = null;
}

/* base color generation function */
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

/* helper functions for color generation and boundary checks */
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function inRange(value) {
    if (value < 1 || value > 255) return false;
    return true;
}

/* change the background */
window.addEventListener("keydown", checkSpacePressed, false);
function checkSpacePressed(evt) {
    if (evt.keyCode == "32") {
        generateGreen();
    }
}

/* define elements for checkMouseClick below */
window.addEventListener("click", checkMousePress, false);
const nameButton = document.getElementById("redButton");
/* if mouseClick and mouse is not over any buttons, generateGreen */
function checkMousePress(evt) {
    var target = (evt.target);
    if(target.id !== nameButton.id) {
        generateGreen();
    }
};


