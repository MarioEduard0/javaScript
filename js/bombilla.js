const ZOOM_LEVEL = document.getElementById("sliderZoom");
const LIGHT_LEVEL = document.getElementById("sliderLight");
const ROTATION_LEVEL = document.getElementById("sliderRotation");


const BOMBILLA = document.getElementById("bombilla");
const BOTON_BOMBILLA = document.getElementById("boton-bombilla");

const ZOOM_LEVEL_STRING = document.getElementById("zoom-level-p");
const LIGHT_LEVEL_STRING = document.getElementById("light-level-p");
const ROTATION_LEVEL_STRING = document.getElementById("rotation-level-p");




const BOMBILLA_BUTTON_ON_PATH = ("img/Ejercicio bombilla/bon.jpg")
const BOMBILLA_BUTTON_OFF_PATH = ("img/Ejercicio bombilla/boff.jpg")

const BOMBILLA_ON_PATH = ("img/Ejercicio bombilla/on.png")
const BOMBILLA_OFF_PATH = ("img/Ejercicio bombilla/off.png")


var lightState = true;
var lightStateButton = true;


setElementsToListener();

function setElementsToListener() {

    BOTON_BOMBILLA.onclick = function () {
        onOffLight();
    }

    ZOOM_LEVEL.onchange = function () {
        updateZoomLevel(ZOOM_LEVEL.value);
    };

    LIGHT_LEVEL.onchange = function () {
        updateLightLevel(LIGHT_LEVEL.value);
    };

    ROTATION_LEVEL.onchange = function () {
        updateRotationLevel(ROTATION_LEVEL.value);
    };

}

function updateZoomLevel(level) {
    BOMBILLA.style["scale"] = level*0.15;
    ZOOM_LEVEL_STRING.textContent = "Light Zoom level: " + level;
}

function updateLightLevel(level) {
    BOMBILLA.style["opacity"] =  level*0.15;
    LIGHT_LEVEL_STRING.textContent = "Light level: " + level;
}


function updateRotationLevel(level) {
    BOMBILLA.style["rotate"] = level*40+"deg";
    ROTATION_LEVEL_STRING.textContent = "Light Rotation: " + level;
}




function onOffLight() {
    if (lightState) {
        lightState = false;
        BOMBILLA.src = BOMBILLA_OFF_PATH;
        BOTON_BOMBILLA.src = BOMBILLA_BUTTON_OFF_PATH;
    } else {
        lightState = true;
        BOMBILLA.src = BOMBILLA_ON_PATH;
        BOTON_BOMBILLA.src = BOMBILLA_BUTTON_ON_PATH;

    }
}