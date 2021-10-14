const startBtn = document.querySelector(".iniciar"),
stopBtn = document.querySelector(".parar"),
resetBtn = document.querySelector(".reiniciar");

startBtn.addEventListener("click", iniciar);
stopBtn.addEventListener("click", parar);
resetBtn.addEventListener("click", reiniciar);

function iniciar() {
    startBtn.classList.add("active");
    startBtn.classList.remove("stopActive");
}
function parar() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
}
function reiniciar() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
}