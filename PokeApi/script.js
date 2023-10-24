const toggleButton = document.getElementById('toggle-types');
const typesContainer = document.querySelector('.types');
const divsInsideTypes = typesContainer.querySelectorAll('div');

var textArray = [];

let isTypesVisible = false;

toggleButton.addEventListener('click', () => {
    if (!isTypesVisible) {
        typesContainer.style.display = 'flex';
        setTimeout(() => {
            typesContainer.style.opacity = 1;
            typesContainer.style.top = '0';
        }, 100);
    } else {
        typesContainer.style.opacity = 0;
        typesContainer.style.top = '-50px';
        setTimeout(() => {
            typesContainer.style.display = 'none';
        }, 1000);
    }
    isTypesVisible = !isTypesVisible;

    toggleButton.classList.toggle('active');

    // Elimina la clase "active" de todos los otros divs
    divsInsideTypes.forEach(div => {
        div.classList.remove('active');
    });

    textArray = [];
});


divsInsideTypes.forEach(div => {
    div.addEventListener('click', () => {
        const pElement = div.querySelector('p');
        const pText = pElement.textContent;

        const index = textArray.indexOf(pText);

        if (index !== -1) {
            textArray.splice(index, 1); // Elimina el elemento del array si ya está presente
            div.classList.remove('active'); // Quita la clase "active" del div
        } else {
            textArray.push(pText);
            div.classList.add('active'); // Agrega la clase "active" al div
        }

        console.log('Texto actual del <p>:', pText);
        console.log('Array de textos:', textArray);
    });
});
