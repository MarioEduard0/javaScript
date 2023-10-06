const PLAYER_OPTION_PIEDRA = document.getElementById("piedra");
const PLAYER_OPTION_PAPEL = document.getElementById("papel");
const PLAYER_OPTION_TIJERAS = document.getElementById("tijeras");
const GAME_RESTART = document.getElementById("restart-game");

const MACHINE_OPTION_STRING = document.getElementById("machineOption");
const RESULT_STRING = document.getElementById("scoreResume");

const DEFAULT_MACHINE_STRING = "La máquina ha sacado: ";
const GAME_RESULT_TIE = "empate :|";
const GAME_RESULT_WIN = "ganaste :)";
const GAME_RESULT_LOSE = "perdiste :(";


var cooldown = false;

var playerResult = 0;
var machineResult = 0;

var gameRound = 0;

setElementsToListener();

function setElementsToListener() {

    PLAYER_OPTION_PIEDRA.onclick = function () {
        playGame("piedra");
    };
    PLAYER_OPTION_PAPEL.onclick = function () {
        playGame("papel");
    };
    PLAYER_OPTION_TIJERAS.onclick = function () {
        playGame("tijeras");
    };

    GAME_RESTART.onclick = function () {
        restartGame();
    }
}

function randomOptionMachine() {
    var result = "";
    var random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            result = "piedra";
            break;
        case 2:
            result = "papel";
            break;
        case 3:
            result = "tijeras";
            break;
    }
    return result;
}


function playGame(playerOption) {
    gameRound++;
    var gameResult = "";
    var machineOption = randomOptionMachine();
    console.log("player: " + playerOption);
    console.log("machine: " + machineOption);

    if (
        (playerOption == "piedra" && machineOption == "tijeras") ||
        (playerOption == "papel" && machineOption == "piedra") ||
        (playerOption == "tijeras" && machineOption == "papel")
    ) {
        playerResult++;
        gameResult = GAME_RESULT_WIN;
        setresultColorButton(playerOption, true);
    } else if (playerOption == machineOption) {
        gameResult = GAME_RESULT_TIE;
        setresultColorButton(playerOption, false, true); // Agrega la clase u-tie
    } else {
        machineResult++;
        gameResult = GAME_RESULT_LOSE;
        setresultColorButton(playerOption, false, false);
    }

    MACHINE_OPTION_STRING.textContent = DEFAULT_MACHINE_STRING + machineOption + " - " + gameResult;
    RESULT_STRING.textContent = playerResult + " - " + machineResult;

    if (gameRound >= 3) {
        endGame();

    }
}

function endGame() {
    if (playerResult == 3) {
        restartGame();
        MACHINE_OPTION_STRING.textContent = "Has ganado a la maquina :)";
    } else if (machineResult == 3) {
        restartGame();
        MACHINE_OPTION_STRING.textContent = "Vaya... has peridido :("
    }
}

function restartGame() {
    playerResult = 0;
    machineResult = 0;
    RESULT_STRING.textContent = playerResult + " - " + machineResult;
}

function setresultColorButton(id, win, tie) {
    const buttonClassToggle = document.getElementById(id);

    cooldown = true;

    if (win) {
        buttonClassToggle.classList.add("u-win");
    } else if (tie) {
        buttonClassToggle.classList.add("u-tie");
    } else {
        buttonClassToggle.classList.add("u-lose");
    }

    setTimeout(function () {
        buttonClassToggle.classList.remove("u-win");
        buttonClassToggle.classList.remove("u-lose");
        if (tie) {
            buttonClassToggle.classList.remove("u-tie");
        }
    }, 1000);
}
