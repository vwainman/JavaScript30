const ONE_SEC = 1000;
const ONE_MIN = 60;
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('button');
const formInput = document.querySelector('form[name="customForm"]');

function timer(seconds) {
    // *** below doesn't work when you tab away / on ios
    // when scrolling for performance reason ***
    // setInterval(function () {
    //     seconds--;
    // }, ONE_SEC);
    // *** so we have to keep track of the time with Date!
    clearInterval(countdown);
    const now = Date.now();
    const then = now + (seconds * ONE_SEC);
    displayTimeLeft(Math.round((then - Date.now()) / ONE_SEC));
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / ONE_SEC); // can't use var now since that was captured earlier
        if (secondsLeft < 0) // < and not <= so the clock doesn't stop on 00:01
        {                    // due to the fact that setInterval waits a sec before elapsing
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, ONE_SEC);
}

function padZeroes(num, size = 2) {
    num = num.toString();
    while (num.length < size) {
        num = "0" + num;
    }
    return num;
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / ONE_MIN);
    const remainderSeconds = seconds % ONE_MIN;
    const display = padZeroes(minutes) + ":" + padZeroes(remainderSeconds);
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp); //Date.now() == number of milliseconds since jan 1st 1970
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${padZeroes(adjustedHour)}:${padZeroes(minutes)}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

formInput.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(parseInt(mins * ONE_MIN));
    this.reset();
});