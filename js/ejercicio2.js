function functionAlert() {
    var nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Introduce un nombre :)")
    } else {
        alert("Hola " + nombre);
    } 
}