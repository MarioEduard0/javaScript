import { Pregunta } from "./Question.js";
import { Opcion } from "./Option.js";

const questions_text = document.getElementById("questions");
const button_question_1 = document.getElementById("question1");
const button_question_2 = document.getElementById("question2");
const button_question_3 = document.getElementById("question3");
const button_question_4 = document.getElementById("question4");
const questions_resume = document.getElementById("question-resume");


var reset_quiz;
var preguntas = [];
var current_question_round = 0;
var total_rounds = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var gameActive = true;

initQuestions();
gameLogicFunctions();
setElementsToListener([button_question_1, button_question_2, button_question_3, button_question_4]);

function initQuestions() {
    const pregunta1 = new Pregunta(1, '¿Qué lenguaje de programación es conocido como "el lenguaje de las serpientes"?',
        [
            new Opcion('Java', false),
            new Opcion('C++', false),
            new Opcion('Python', true),
            new Opcion('JavaScript', false)
        ]
    );

    const pregunta2 = new Pregunta(2, '¿Cuál de los siguientes NO es un lenguaje de programación web?',
        [
            new Opcion('HTML', false),
            new Opcion('Java', true),
            new Opcion('CSS', false),
            new Opcion('JavaScript', false)
        ]
    );

    const pregunta3 = new Pregunta(3, '¿Qué paradigma de programación se centra en la manipulación de objetos?',
        [
            new Opcion('Programación estructurada', false),
            new Opcion('Programación orientada a objetos', true),
            new Opcion('Programación funcional', false),
            new Opcion('Programación declarativa', false)
        ]
    );

    const pregunta4 = new Pregunta(4, '¿Cuál es un lenguaje de marcado utilizado para diseñar páginas web?',
        [
            new Opcion('Java', false),
            new Opcion('Python', false),
            new Opcion('HTML', true),
            new Opcion('CSS', false)
        ]
    );

    const pregunta5 = new Pregunta(5, '¿Qué lenguaje de programación se utiliza comúnmente para la programación del lado del servidor en aplicaciones web?',
        [
            new Opcion('Python', false),
            new Opcion('Java', false),
            new Opcion('Ruby', false),
            new Opcion('JavaScript', true)
        ]
    );

    preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5];
    total_rounds = preguntas.length;
}

function gameLogicFunctions() {
    if (current_question_round <= total_rounds - 1) {
        questions_text.textContent = preguntas[current_question_round].getPregunta();
        var options = preguntas[current_question_round].getOpciones();

        button_question_1.textContent = options[0].getTexto();
        button_question_2.textContent = options[1].getTexto();
        button_question_3.textContent = options[2].getTexto();
        button_question_4.textContent = options[3].getTexto();

        questions_resume.textContent = "Question " + current_question_round + " of " + (preguntas.length - 1)
    } else {
        questions_text.textContent = "Enhorabuena has finalizado el QuiZ!";

        var parent = button_question_1.parentNode;

        parent.removeChild(button_question_1);
        parent.removeChild(button_question_2);
        parent.removeChild(button_question_3);
        parent.removeChild(button_question_4);

        var h2 = document.createElement("h2");
        h2.className = "quiz-result";
        h2.id = "quiz-result";
        h2.textContent = "Puntuación";

        var p = document.createElement("p");
        p.textContent = "Has acertado: " + correctAnswer + " y has fallado: " + wrongAnswer;

        var reset_p = document.createElement("p");
        reset_p.className = "reset-p";
        reset_p.textContent = "Quieres repetir el quiz?";

        var reset_button = document.createElement("button");
        reset_button.id = "reset-button";
        reset_button.textContent = "Reset";

        parent.appendChild(h2);
        parent.appendChild(p);
        parent.appendChild(reset_p);
        parent.appendChild(reset_button);

        reset_quiz = document.getElementById("reset-button");

        reset_quiz.onclick = function () {

            parent.removeChild(h2);
            parent.removeChild(p);
            parent.removeChild(reset_p);
            parent.removeChild(reset_button);

            parent.appendChild(button_question_1);
            parent.appendChild(button_question_2);
            parent.appendChild(button_question_3);
            parent.appendChild(button_question_4);

            resetGame();
        }
    }
}


function setElementsToListener(buttons) {
    buttons.forEach(button => {
        button.onclick = function () {
            if (!gameActive) {
                return; // No hagas nada si el juego está inactivo
            }
            reviewAnswer(this, buttons);
            buttons.forEach(b => (b.disabled = true)); // Desactiva todos los botones
        }
    });
}


function reviewAnswer(button, buttonGroup) {
    var isCorrect = preguntas[current_question_round].opciones[button.value].getEsCorrecta();
    console.log(preguntas[current_question_round].opciones)
    if (isCorrect) {
        respuestaCorrecta(button, true, buttonGroup);
    } else {
        respuestaCorrecta(button, false, buttonGroup);
    }
}


function respuestaCorrecta(button, isCorrect, buttonGroup) {
    if (isCorrect) {
        button.style.color = "white";
        button.style.backgroundColor = "green";
        correctAnswer++;
    } else {
        button.style.color = "white";
        button.style.backgroundColor = "red";
        wrongAnswer++;
    }
    setTimeout(() => {
        gameActive = true; // Reactiva el juego

        buttonGroup.forEach(b => (b.disabled = false));
        current_question_round++;
        button.style.color = "";
        button.style.backgroundColor = "";
        gameLogicFunctions();
        button.disabled = false;
    }, 2000);
    gameActive = false;
}

function resetGame() {

    current_question_round = 0;
    correctAnswer = 0;
    wrongAnswer = 0;

    gameLogicFunctions();
}

