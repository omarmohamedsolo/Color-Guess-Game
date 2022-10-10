let numberCircle = 6;
let Circle = document.querySelectorAll(".Circle");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

init();

function init() {
    modeSetup();
    CircleSetup();
    reset();
}

let levels = [{name: "Easy", Circle: 3},{name: "Hard", Circle: 6}];

function modeSetup() {
    Array.from(modeButtons).forEach(mode => {
        mode.addEventListener('click', function() {
            Array.from(modeButtons).forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
            let levelFound = levels.find(level => level.name === this.textContent);
            numberCircle = levelFound.Circle;
            reset();
        });
    });
}

function CircleSetup() {
    for (let i = 0; i < Circle.length; i++) {
        Circle[i].addEventListener("click", function() {
            let clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numberCircle);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < Circle.length; i++) {
        if (colors[i]) {
            Circle[i].style.display = "block";
            Circle[i].style.background = colors[i];
        } else {
            Circle[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for (let i = 0; i < Circle.length; i++) {
        Circle[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    let randomColors = [];
    for (let i = 0; i < number; i++) {
        randomColors.push(randomColor());
    }
    return randomColors;
}
console.log(changeColors)