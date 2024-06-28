let happinessLevel = 20;
let hungerLevel = 20;
let restBtn = document.querySelector("#resetGame")

function startGame() {
    document.querySelector('.landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

const resetGame = () => {
    hungerLevel = 20;
    happinessLevel = 20;
    updateStatus();
    document.getElementById("pet-image").src = "images/golden-retriever2.png";
}

function feedPet() {
    happinessLevel += 10;
    updateStatus();
    hungerLevel += 10;
    updateStatus();
}

function playWithPet() {
    happinessLevel += 20;
    triggerAction('jump');
    updateStatus();
}

function barkPet(){
   const barkSound = new Audio("sounds/dog-barking.mp3");
   barkSound.play();
}

document.getElementById("bark-button").addEventListener("click" , barkPet);

function updateStatus() {
    if (happinessLevel > 100) happinessLevel = 100;
    if (happinessLevel < 0) happinessLevel = 0;
    if (hungerLevel > 100) hungerLevel = 100;
    if (hungerLevel < 0) hungerLevel = 0;


    
    document.getElementById('pet-hap').innerText = `Happiness: ${happinessLevel}%`;

    document.getElementById('pet-hunger').innerText = `Hunger: ${hungerLevel}%`

    let petImage = document.getElementById('pet-image');
    if (happinessLevel > 70 && hungerLevel > 70) {
        petImage.src = 'images/happy-dog.png';
        const playSound = new Audio("sounds/dogs-playing.mp3")
        playSound.play();
    } else if (happinessLevel > 30 && hungerLevel > 50) {
        petImage.src = 'images/neutral.png';
    } else {
        petImage.src = 'images/sad.png';
        const sadSound = new Audio("sounds/whimper-sad.wav")
        sadSound.play();
    }
}

function triggerAction(action) {
    let petImage = document.getElementById('pet-image');
    if (action === 'jump') {
        petImage.classList.add('jump');
        setTimeout(() => {
            petImage.classList.remove('jump');
        }, 500);
    }
}

function move(){
let elem = document.getElementById("slide-bar");
let width = 25;
let id = setInterval(frame , 10);
function frame(){
    if(width >= 100) {
        clearInterval(id);
    } else { 
        width ++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

    }
}};



