const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

let seconde = 10;

btn.addEventListener("click",() => {
    start();
})

function start() {
    let interval = setInterval(() => {
        if(seconde === 0) {
            stop(interval);
            h1.textContent = "STOP !"
        } else {
            seconde--;
            h1.textContent = seconde;
        }
    }, 1000);
};

function stop(interval) {
    clearInterval(interval);
}
