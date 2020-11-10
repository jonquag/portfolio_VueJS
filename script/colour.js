let background = document.getElementById("background");
let wheel = document.getElementById("wheel");
let mouseout = document.getElementById("mouse-out");
let resetter = document.getElementById("reset-cards");

let resetAll = function() {
    wheel.style.backgroundColor = "";
    background.style.backgroundColor = "";
    mouseout.innerHTML = "Change me!";
};
resetter.onclick = resetAll;

function rgb(num) {
    return Math.floor(Math.random() * num);
};
let colorChange = (event) => {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
};
let mouseOut = (event) => {
    event.target.innerHTML = "Wow, magic.";
};

background.onclick = colorChange;
wheel.onwheel = colorChange;
mouseout.onmouseout = mouseOut;
