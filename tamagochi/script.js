const PROGRESS_EAT = document.getElementById("eat-progress");
const PROGRESS_PLAY = document.getElementById("play-progress");
const PROGRESS_FIGHT = document.getElementById("fight-progress");
const PROGRESS_SLEEP = document.getElementById("sleep-progress");
const PROGRESS_HAPPINESS = document.getElementById("happiness-progress");

const BUTTON_EAT_1 = document.getElementById("food-1");
const BUTTON_EAT_2 = document.getElementById("food-2");
const BUTTON_EAT_3 = document.getElementById("food-3");
const ICE_CREAM_VALUE = 10;
const CARROT_VALUE = 20;
const CHIKEN_VALUE = 25;

const BUTTON_PLAY_1 = document.getElementById("play-1");
const BUTTON_PLAY_2 = document.getElementById("play-2");
const BUTTON_PLAY_3 = document.getElementById("play-3");
const VIDEOGAMES_VALUE = 20;
const SPORTS_VALUE = 30;
const CHESS_VALUE = 15;

const BUTTON_FIGHT_1 = document.getElementById("fight-1");
const BUTTON_FIGHT_2 = document.getElementById("fight-2");
const FIGHT_VALUE = 30;
const RUNNING_VALUE = 20;

const BUTTON_SLEEP_1 = document.getElementById("sleep-1");
const BUTTON_SLEEP_2 = document.getElementById("sleep-2");
const NAP_VALUE = 20;
const SLEEP_VALUE = 40;

const hungryState = 0.3;
const boringState = 1.5;
const tiredState = 1;
const asleepState = 0.3;
const time_progress_sleep = 2000;
var alive = true;

function reducirBarra() {
    if (alive) {
        setInterval(gameLogic, time_progress_sleep);
    }
}

function gameLogic() {
    reducir(PROGRESS_EAT, hungryState);
    reducir(PROGRESS_FIGHT, tiredState);
    reducir(PROGRESS_PLAY, boringState);
    reducir(PROGRESS_SLEEP, asleepState);
}

function reducir(progress_bar, estado) {
    progress_bar.value -= estado;
    if (progress_bar.value <= 100) {
        progress_bar.dataset.step = 100;
    }
    if (progress_bar.value <= 60) {
        progress_bar.dataset.step = 60;
    }
    if (progress_bar.value <= 30) {
        progress_bar.dataset.step = 30;
    }
}

function setButtonToListener() {
    configureButtons(BUTTON_EAT_1, eatButton, ICE_CREAM_VALUE);
    configureButtons(BUTTON_EAT_2, eatButton, CARROT_VALUE);
    configureButtons(BUTTON_EAT_3, eatButton, CHIKEN_VALUE);

    configureButtons(BUTTON_PLAY_1, playButton, VIDEOGAMES_VALUE);
    configureButtons(BUTTON_PLAY_2, playButton, SPORTS_VALUE);
    configureButtons(BUTTON_PLAY_3, playButton, CHESS_VALUE);

    configureButtons(BUTTON_FIGHT_1, fightButton, FIGHT_VALUE);
    configureButtons(BUTTON_FIGHT_2, fightButton, RUNNING_VALUE);

    configureButtons(BUTTON_SLEEP_1, sleepButton, NAP_VALUE);
    configureButtons(BUTTON_SLEEP_2, sleepButton, SLEEP_VALUE);
}

function configureButtons(button, action, value) {
    button.onclick = function () {
        action(value);
    };
}

function enableButtons(buttons) {
    for (let button of buttons) {
        button.disabled = false;
    }
}

function enableActionButtons(buttons) {
    for (let button of buttons) {
        button.disabled = false;
    }
}

function eatButton(value) {
    actionButton(value, PROGRESS_EAT, [BUTTON_EAT_1, BUTTON_EAT_2, BUTTON_EAT_3]);
}

function playButton(value) {
    actionButton(value, PROGRESS_PLAY, [BUTTON_PLAY_1, BUTTON_PLAY_2, BUTTON_PLAY_3]);
}

function fightButton(value) {
    actionButton(value, PROGRESS_FIGHT, [BUTTON_FIGHT_1, BUTTON_FIGHT_2]);
}

function sleepButton(value) {
    actionButton(value, PROGRESS_SLEEP, [BUTTON_SLEEP_1, BUTTON_SLEEP_2]);
}

function actionButton(value, progress, buttons) {
    progress.value += value;
    PROGRESS_SLEEP.value -= value / 2;

    for (let button of buttons) {
        button.disabled = true;
    }

    setTimeout(function () {
        enableActionButtons(buttons);
    }, 2000);
}

reducirBarra();
setButtonToListener();


/**
 * 
 * 
function setButtonToListener() {
    BUTTON_EAT_1.onclick = function () {
        eatButton(ICE_CREAM_VALUE);
    }
    BUTTON_EAT_2.onclick = function () {
        eatButton(CARROT_VALUE);

    }
    BUTTON_EAT_3.onclick = function () {
        eatButton(CHIKEN_VALUE);
    }


    BUTTON_PLAY_1.onclick = function () {
        playButton(VIDEOGAMES_VALUE);
    }
    BUTTON_PLAY_2.onclick = function () {
        playButton(SPORTS_VALUE);
    }
    BUTTON_PLAY_3.onclick = function () {
        playButton(CHESS_VALUE);
    }


    BUTTON_FIGHT_1.onclick = function () {
        fightButton(FIGHT_VALUE);
    }
    BUTTON_FIGHT_2.onclick = function () {
        fightButton(RUNNING_VALUE);
    }


    BUTTON_SLEEP_1.onclick = function () {
        sleepButton(NAP_VALUE);
    }
    BUTTON_SLEEP_2.onclick = function () {
        sleepButton(SLEEP_VALUE);
    }


}

function eatButton(value) {
    PROGRESS_EAT.value = (PROGRESS_EAT.value + value);
    PROGRESS_SLEEP.value = (PROGRESS_SLEEP.value - (value / 5));

    BUTTON_EAT_1.disabled = true;
    BUTTON_EAT_2.disabled = true;
    BUTTON_EAT_3.disabled = true;
    setInterval(enableEatButtons, 2000);
}


function enableEatButtons() {
    BUTTON_EAT_1.disabled = false;
    BUTTON_EAT_2.disabled = false;
    BUTTON_EAT_3.disabled = false;
}

function fightButton(value) {
    PROGRESS_FIGHT.value = (PROGRESS_FIGHT.value + value);
    PROGRESS_SLEEP.value = (PROGRESS_SLEEP.value - (value / 5));

    BUTTON_FIGHT_1.disabled = true;
    BUTTON_FIGHT_2.disabled = true;
    setInterval(enableFightButtons, 2000);
}


function enableFightButtons() {
    BUTTON_FIGHT_1.disabled = false;
    BUTTON_FIGHT_2.disabled = false;
}

function playButton(value) {
    PROGRESS_PLAY.value = (PROGRESS_PLAY.value + value);
    PROGRESS_SLEEP.value = (PROGRESS_SLEEP.value - (value / 5));

    BUTTON_PLAY_1.disabled = true;
    BUTTON_PLAY_2.disabled = true;
    BUTTON_PLAY_3.disabled = true;

    setInterval(enablePlayButtons, 2000);
}

function enablePlayButtons() {
    BUTTON_PLAY_1.disabled = false;
    BUTTON_PLAY_2.disabled = false;
    BUTTON_PLAY_3.disabled = false;

}

function sleepButton(value) {
    PROGRESS_SLEEP.value = (PROGRESS_SLEEP.value + value);
    PROGRESS_EAT.value = (PROGRESS_EAT.value - (value / 2));
    PROGRESS_FIGHT.value = (PROGRESS_FIGHT.value - (value / 3));

    BUTTON_SLEEP_1.disabled = true;
    BUTTON_SLEEP_2.disabled = true;
    setInterval(enableSleepButtons, 2000);
}

function enableSleepButtons() {
    BUTTON_SLEEP_2.disabled = false;
    BUTTON_SLEEP_2.disabled = false;
}
 */