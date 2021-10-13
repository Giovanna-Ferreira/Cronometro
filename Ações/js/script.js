const startBtn = document.querySelector(".iniciar"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
}
function stop() {
    stopBtn.classList.remove("active");
}
function reset() {
    resetBtn.classList.remove("active");
}