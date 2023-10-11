const PROGRESS_EAT = document.getElementById("eat-progress");
const PROGRESS_PLAY = document.getElementById("play-progress");
const PROGRESS_FIGHT = document.getElementById("fight-progress");
const PROGRESS_SLEEP = document.getElementById("sleep-progress");
const PROGRESS_HAPPINESS = document.getElementById("happiness-progress");

const LABEL_PROGRESS_EAT = document.getElementById("eat-progress-level");
const LABEL_PROGRESS_PLAY = document.getElementById("play-progress-level");
const LABEL_PROGRESS_FIGHT = document.getElementById("fight-progress-level");
const LABEL_PROGRESS_SLEEP = document.getElementById("sleep-progress-level");
const LABEL_PROGRESS_HAPPY = document.getElementById("happiness-progress-level");

const LABEL_NAME = document.getElementById("tamagochi-name");



const IMG_TAMAGOCHI = document.getElementById("tamagochi");

const HAPPY_CAT = "img/happy-cat.gif"
const SAD_CAT = "img/crying-cat.gif"

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
const NAP_VALUE = 40;
const SLEEP_VALUE = 60;

const hungryState = 0.125;
const boringState = 0.25;
const tiredState = 0.1875;
const asleepState = 0.0625;


var catIsHappy = true;

const time_progress_sleep = 1;
const BUTTON_TÇIME_DISABLED = 2000;
var alive = true;

function reducirBarra() {
    setInterval(gameLogic, time_progress_sleep);

}

function gameLogic() {

    if (alive) {
        reducir(PROGRESS_EAT, hungryState);
        reducir(PROGRESS_FIGHT, tiredState);
        reducir(PROGRESS_PLAY, boringState);
        reducir(PROGRESS_SLEEP, asleepState);
    }
    catStates();
    labelPercentage(LABEL_PROGRESS_EAT, (Math.round(PROGRESS_EAT.value) + "% Full"));
    labelPercentage(LABEL_PROGRESS_PLAY, (Math.round(PROGRESS_PLAY.value) + "% Fun"));
    labelPercentage(LABEL_PROGRESS_FIGHT, (Math.round(PROGRESS_FIGHT.value) + "% Strengh"));
    labelPercentage(LABEL_PROGRESS_SLEEP, (Math.round(PROGRESS_SLEEP.value) + "% Energy"));
    labelPercentage(LABEL_PROGRESS_HAPPY, (Math.round(PROGRESS_HAPPINESS.value) + "% Happiness"));


}

function labelPercentage(label_progress, string) {
    label_progress.textContent = string;
}

function catStates() {
    if (PROGRESS_HAPPINESS.value <= 50 && catIsHappy) {
        IMG_TAMAGOCHI.src = SAD_CAT;
        catIsHappy = false;
    } else if (PROGRESS_HAPPINESS.value > 50 && !catIsHappy) {
        IMG_TAMAGOCHI.src = HAPPY_CAT;
        catIsHappy = true;
    }

    if (PROGRESS_HAPPINESS.value == 0) {
        const heartBox = document.querySelector('.heart-box');
        const firstImage = heartBox.querySelectorAll('img');
        if (typeof firstImage[0] !== "undefined") {
            firstImage[0].remove();
            PROGRESS_HAPPINESS.value += 100;
            PROGRESS_EAT.value += 100;
            PROGRESS_FIGHT.value += 100;
            PROGRESS_SLEEP.value += 100;
            PROGRESS_PLAY.value += 100;
        } else {
            alive = false;
            LABEL_NAME.textContent = "Game OVer"
        }
    }

}



function reducir(progress_bar, estado) {
    progress_bar.value -= estado;
    PROGRESS_HAPPINESS.value -= (estado / 9);

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
        if (alive) {
            action(value);
        }
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
    PROGRESS_HAPPINESS.value += (value / 2);


    if (progress == PROGRESS_EAT) {
        PROGRESS_SLEEP.value -= value / 4;
    }
    if (progress == PROGRESS_PLAY) {
        PROGRESS_SLEEP.value -= value / 2;
    }
    if (progress == PROGRESS_FIGHT) {
        PROGRESS_SLEEP.value -= value - (value / 10);
    }

    if (progress == PROGRESS_SLEEP) {
        PROGRESS_PLAY.value -= value / 5;
        PROGRESS_FIGHT.value -= value / 3;
        PROGRESS_EAT.value -= value - (value / 5);

    }

    for (let button of buttons) {
        button.disabled = true;
    }

    setTimeout(function () {
        enableActionButtons(buttons);
    }, BUTTON_TÇIME_DISABLED);
}

reducirBarra();
setButtonToListener();
