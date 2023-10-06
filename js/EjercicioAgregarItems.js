
let iconos = [];


let randomIcons = ["🚛", "🛹", "🏵️", "☘️", "🌴", "🍋", "🍕", "🍢", "🍘", "🥣", "🍽️", "🍻"]

function pushItem() {

    let iconoAleatorio = randomIcons[Math.floor(Math.random() * randomIcons.length)];
    iconos.push(iconoAleatorio);
    actualizarArray();
}


function unshiftItem() {

    let iconoAleatorio = randomIcons[Math.floor(Math.random() * randomIcons.length)];
    iconos.unshift(iconoAleatorio);
    actualizarArray();
}


function insertAtItem() {
    let index = document.getElementById("indexOfAdd").value;
    if (index >= 0 && index <= iconos.length) {

        let iconoAleatorio = randomIcons[Math.floor(Math.random() * randomIcons.length)];
        iconos.splice(index, 0, iconoAleatorio);
        actualizarArray();
    }
}


function popItem() {
    if (iconos.length > 0) {
        iconos.pop();
        actualizarArray();
    }
}


function shiftItem() {
    if (iconos.length > 0) {
        iconos.shift();
        actualizarArray();
    }
}


function removeAtItem() {
    let index = document.getElementById("indexofRemove").value;
    if (index >= 0 && index < iconos.length) {
        iconos.splice(index, 1);
        actualizarArray();
    }
}

function actualizarArray3() {
    let arrayItems = document.querySelector(".arrayItems");
    arrayItems.innerHTML = "[" + iconos.map(item => '<div class="arrayItem"><p>' + item + '</p></div>').join(", ") + "]";
}

function actualizarArray() {
    let arrayItems = document.querySelector(".arrayItems");
    const newArrayContent = "[" + iconos.map(item => '<span class="arrayItem">' + item + '</span>').join(", ") + "]";


    setTimeout(() => {

        arrayItems.innerHTML = newArrayContent;

        setTimeout(() => {

            const arrayItemsElements = document.querySelectorAll('.arrayItem');
            arrayItemsElements.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
        });
    });
}
