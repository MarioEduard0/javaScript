const slider = document.getElementById('theme-slider');

const allPElements = document.querySelectorAll('p'); // Seleccionar todas las etiquetas <p>
const allButtonElements = document.querySelectorAll('button'); // Seleccionar todas las etiquetas <p>


const special_button_del = document.getElementById("special-button-del");
const special_button_reset = document.getElementById("special-button-reset");
const special_button_equals = document.getElementById("special-button-equals");

const calc_result = document.getElementById("calc-result");
const calc_buttons = document.getElementById("calc-buttons");

slider.addEventListener('input', function () {
    switch (this.value) {
        case '0':
            document.body.style.backgroundColor = '';
            allPElements.forEach(pElement => {
                pElement.style.color = '';
            });


            allButtonElements.forEach(btElement => {
                btElement.style.color = '';
                btElement.style.backgroundColor = '';
                btElement.style.borderBottomColor = '';
            });

            slider.style.setProperty('--backgroundColor-slider', ''); // Restablecer el color de fondo del thumb
            slider.style.setProperty('--thumb-color', '');

            special_button_del.style.backgroundColor = '';
            special_button_del.style.borderBottomColor = '';

            special_button_reset.style.backgroundColor = '';
            special_button_reset.style.borderBottomColor = '';

            special_button_equals.style.backgroundColor = '';
            special_button_equals.style.borderBottomColor = '';

            document.documentElement.style.setProperty('--theme-button-active-color', '');
            document.documentElement.style.setProperty('--theme-button-del-reset-active-color', '');
            document.documentElement.style.setProperty('--theme-button-equals-active-color', '');

            calc_result.style.backgroundColor = '';
            calc_buttons.style.backgroundColor = '';

            // Eliminar la clase para restablecer el estilo de la bolita
            slider.classList.remove('slider-thumb-1');
            break;
        case '1':
            document.body.style.backgroundColor = 'rgb(226,225,225)';
            allPElements.forEach(pElement => {
                pElement.style.color = 'black';
            });

            allButtonElements.forEach(btElement => {
                btElement.style.color = '';
                btElement.style.backgroundColor = '';
                btElement.style.borderBottomColor = '';
            });
            slider.style.setProperty('--backgroundColor-slider', 'rgba(212,205,205,255)'); // Cambiar el color de fondo del thumb
            slider.style.setProperty('--thumb-color', 'rgba(251,143,69,255)');

            special_button_del.style.backgroundColor = 'rgba(57,129,135,255)';
            special_button_reset.style.backgroundColor = 'rgba(57,129,135,255)';
            special_button_equals.style.backgroundColor = 'rgba(200,84,1,255)';

            document.documentElement.style.setProperty('--theme-button-active-color', '');
            document.documentElement.style.setProperty('--theme-button-del-reset-active-color', '');
            document.documentElement.style.setProperty('--theme-button-equals-active-color', '');
            document.documentElement.style.setProperty('--theme-button-active-color', 'red');
            document.documentElement.style.setProperty('--theme-button-del-reset-active-color', 'blue');
            document.documentElement.style.setProperty('--theme-button-equals-active-color', 'green');

            calc_result.style.backgroundColor = 'white';
            calc_buttons.style.backgroundColor = 'rgba(211,205,205,255)';

            break
        case '2':
            document.body.style.backgroundColor = 'rgba(23,6,42,255)';
            allPElements.forEach(pElement => {
                pElement.style.color = 'rgba(247,223,51,255)';
            });

            allButtonElements.forEach(btElement => {
                btElement.style.color = 'rgba(253,230,64,255)';
                btElement.style.backgroundColor = 'rgba(51,27,77,255)';
                btElement.style.borderBottomColor = 'rgba(135,31,159,255)';
            });
            slider.style.setProperty('--backgroundColor-slider', 'rgba(30,8,54,255)'); // Cambiar el color de fondo del thumb
            slider.style.setProperty('--thumb-color', 'rgba(6,219,207,255)');

            special_button_del.style.backgroundColor = 'rgba(87,7,122,255)';
            special_button_del.style.borderBottomColor = 'rgba(186,21,244,255)';
            special_button_reset.style.backgroundColor = 'rgba(87,7,122,255)';
            special_button_reset.style.borderBottomColor = 'rgba(186,21,244,255)';
            special_button_equals.style.backgroundColor = 'rgba(6,219,207,255)';
            special_button_equals.style.borderBottomColor = 'rgba(109,248,239,255)';

            document.documentElement.style.setProperty('--theme-button-active-color', 'red');
            document.documentElement.style.setProperty('--theme-button-del-reset-active-color', 'rgba(98,181,189,255)');
            document.documentElement.style.setProperty('--theme-button-equals-active-color', 'rgba(255,139,56,255)');

            calc_result.style.backgroundColor = 'rgba(30,8,54,255)';
            calc_buttons.style.backgroundColor = 'rgba(30,8,54,255)';

            button.style.backgroundColor = 'rgba(51,27,77,255)';

            ;

            break;
    }


});


