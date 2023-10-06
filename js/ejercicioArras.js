


let array1 = ["🍍", "🍏", "🍋", "🍕", "🍉", "🥑", "🍍", "🍓"];


let array2 = ["🍍", "🍏", "🍋", "🍕", "🍉", "🥑", "🍍", "🍓"];

ejeercicio1();




function ejeercicio1() {

    console.log("Ejercicio 1: \n")

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == "🍕") {
            for (let j = i; j < array1.length; j++) {
                array1[j] = "🍻";
            }
        }
    };

    console.log(array1);



    console.log("\n metodo alternativo: \n")


    const pizza = (element) => element === "🍕";

    let pizzIndex = array2.findIndex(pizza);

    console.log(array2.fill("🍻", pizzIndex))
};


function ejeercicio2() {

    const piña = (element) => element === "🍍";

    console.log("\n Hay alguna piña? " + array1.some(piña));

};


function ejercicio3() {


    const piñaRemove = (element) => element === "🍍";

    let pizzIndex2 = array2.findIndex(piñaRemove);

    array1.splice(piñaRemove, 1);

    console.log(array1)
};



for (let index = 0; index < array2.length; index++) {
    if (array2[index] == "🍍") {
        array2.splice(index, 1)
    }
}



console.log(array2)