function charge(button) {
    if (button.classList.contains("disabled")) {
        alert("Cette offre est expirée ❌");
        return;
    }
    
    button.textContent = "Chargement...";
    button.disabled = true;
    
    setTimeout(() => {
        window.location.href = "https://riotgames0.github.io/Valorantpoint/ValorantPionts/index.html";
    }, 3000);
}

// Minuteur
let countdownElement = document.getElementById("countdown");
let offersElement = document.getElementById("offers");
let timeLeft = 120;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownElement.textContent = `${minutes}:${seconds}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        countdownElement.textContent = "Expiré ❌";
        offersElement.style.display = "none";
    }
}

updateTimer();

// Ajouter une image de fond
document.body.style.background = "url('img/background.jpg') no-repeat center center fixed";
document.body.style.backgroundSize = "cover";

// Désactiver l'offre de 3650 VP uniquement
document.addEventListener("DOMContentLoaded", function() {
    let offers = document.querySelectorAll(".currency");
    offers.forEach(offer => {
        if (offer.textContent.includes("3 650 VP") || offer.textContent.includes("5 350 VP")) {
            offer.classList.add("expired");
            let button = offer.querySelector("button");
            if (button) {
                button.textContent = "Expiré ❌";
                button.classList.add("disabled");
                button.disabled = true;
            }
        }
    });
});
