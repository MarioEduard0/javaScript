const IMG_1 = document.getElementById("carta1")
const IMG_2 = document.getElementById("carta2")

const FRONT_CARD_PATH = "img/Ejercicio_carta/card-front.png"
const BACK_CARD_PATH = "img/Ejercicio_carta/card-back.png"

setElementsToListener(IMG_1);
setElementsToListener(IMG_2);

function setElementsToListener(imgID) {
    imgID.onmouseenter = function () {
        switchCard(imgID);
    };

    imgID.onmouseleave = function () {
        switchCardBack(imgID);
    };
}

function switchCard(self) {
    self.src = FRONT_CARD_PATH;
}

function switchCardBack(self) {
    self.src = BACK_CARD_PATH;
}