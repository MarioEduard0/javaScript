const toggleButton = document.getElementById('toggle-types');
const typesContainer = document.querySelector('.types');

let isTypesVisible = false; // Variable para controlar si los tipos están visibles o no

toggleButton.addEventListener('click', () => {
    if (!isTypesVisible) {
        typesContainer.style.display = 'flex'; // Muestra los tipos
        setTimeout(() => {
            typesContainer.style.opacity = 1; // Cambia la opacidad a 1 después de 1 segundo
            typesContainer.style.top = '0'; // Cambia la posición top a 0 después de 1 segundo
        }, 10); // Un pequeño retraso para asegurar la animación
    } else {
        typesContainer.style.opacity = 0; // Cambia la opacidad a 0
        typesContainer.style.top = '-50px'; // Cambia la posición top a -50px
        setTimeout(() => {
            typesContainer.style.display = 'none'; // Oculta los tipos después de la animación
        }, 1000); // La animación dura 1 segundo
    }
    isTypesVisible = !isTypesVisible; // Invierte el estado de visibilidad

    toggleButton.classList.toggle('active'); // Cambia la clase del botón para activar/desactivar la rotación 3D
});
