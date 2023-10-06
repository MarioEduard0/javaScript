

var resultSumarNumeros = sumarNumeros(1, 2, 3);

console.log("Ejercicio 1: " + resultSumarNumeros)

var resultNombreCompleto = nombreCompleto("mario", "ibañez", "rojas")

console.log("Ejercicio 2: " + resultNombreCompleto)

var restulMax = mayorQue(10, 20);

console.log("Ejercicio 3: " + restulMax)




function sumarNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}

function nombreCompleto(nombre, apellido1, apellido2) {
    return nombre + " " + apellido1 + " " + apellido2;
}

function mayorQue(num1, num2) {
    return Math.max(num1, num2);
}