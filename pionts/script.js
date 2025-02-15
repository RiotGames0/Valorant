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
        offersElement.innerHTML = "<p style='color: red; font-size: 18px; font-weight: bold;'>Toutes les offres sont expirées ❌</p>";
    }
}

updateTimer();

// Activer l'offre de 1000 VP
document.addEventListener("DOMContentLoaded", function() {
    let offer1000 = document.querySelector(".currency img[alt='1000 VP']").closest(".currency");
    if (offer1000) {
        offer1000.classList.remove("expired");
        offer1000.querySelector("span").textContent = "1 000 VP - Disponible ✅";
        let button = offer1000.querySelector("button");
        button.classList.remove("disabled");
        button.disabled = false;
        button.textContent = "Recharger";
    }
});
