let hr = min =seg = ms = "0" + 0, 
startTimer;

const startBtn = document.querySelector(".iniciar"),
stopBtn = document.querySelector(".parar"),
resetBtn = document.querySelector(".reiniciar");

startBtn.addEventListener("click", iniciar);
stopBtn.addEventListener("click", parar);
resetBtn.addEventListener("click", reiniciar);

function iniciar() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(()=>{ 
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 10){
            seg++;
            seg = seg < 10 ? "0" + seg : seg;
            ms = "0" + 0;
        }
        if(seg == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            seg = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        
        putValue();
    },100); //1000ms = 1s

}

function parar() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
}
function reiniciar() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
}
function putValue() {
    document.querySelector(".miliseg").innerHTML = ms;
    document.querySelector(".seg").innerHTML = seg;
    document.querySelector(".min").innerHTML = min;
}