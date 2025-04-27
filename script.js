const timer = document.getElementById("timer");
const mode = document.getElementsByClassName("mode")[0]
let intervalId
let seconds = 0;
let cycle = 1; // 1st or 2nd run

function timeRunner() {
    intervalId = setInterval(() => {
        let secs = String(seconds % 60).padStart(2, '0');
        let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        timer.innerHTML = `${mins}:${secs}`;

        if (timer.innerText === "10:00" && cycle === 1) {
            clearInterval(intervalId);
            seconds = 0;
            cycle = 2;
            mode.innerText = "On Break"
            timeRunner();
        } else if (timer.innerText === "05:00" && cycle === 2) {
            clearInterval(intervalId);
            seconds = 0
            cycle = 1
            mode.innerText = "Working..."
            timeRunner()
        }

        seconds++;
    }, 10);
}


function startTimer() {
    clearInterval(intervalId)
    timeRunner()
    mode.innerText = "Working..."
}

function pauseTimer() {
    clearInterval(intervalId);
    mode.innerText = "Pause"
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    cycle = 1;
    timer.innerText = "00:00";
    mode.innerText = "MODE"

}

