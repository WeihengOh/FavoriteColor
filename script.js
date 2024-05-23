/* change the background color, displayed hexcode, and (in the future) the text color */
function changeBackground(color) {
    document.body.style.background = color;
}
function changeHexcode(hexcode) {
    document.getElementById("mainLine").innerHTML = hexcode;
    console.log(hexcode); 
}
function changeCopy(color) {
    document.getElementById("popupLine").innerHTML = hexcode ;
}

/* functions called to generate a random green and and random red color*/
function generateGreen() {
    var delayInMilliseconds = 100; 
    setTimeout(function() {
        green = randomColor(138, 154, 91, 20);
        changeBackground(green);    
        changeHexcode(green);
        changeCopy(green);
    }, delayInMilliseconds);  
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

function removePrompt(){
    subLine = document.getElementById("subLine");
    subLine.style.visibility = "hidden";
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

function copyText() {
    // Get the text field
    var copyText = document.getElementById("mainLine").innerText;
    console.log(copyText);
    
    // temporary input
    var tempInput = document.createElement("input");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);

    // Select the text field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show the popup
    var popup = document.getElementsByClassName("popup")[0];
    popup.style.display = "block";
    // Hide the popup after 2 seconds
    setTimeout(function() {
        popup.style.display = "none";
    }, 2000);
}

