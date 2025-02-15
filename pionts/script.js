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

// Fonction pour activer/désactiver les offres de manière aléatoire
function updateOffers() {
    let offers = document.querySelectorAll(".currency");
    let availableOffers = new Set();

    while (availableOffers.size < 2) {  // Assurer qu'au moins 2 offres sont ouvertes
        let randomIndex = Math.floor(Math.random() * offers.length);
        availableOffers.add(randomIndex);
    }

    offers.forEach((offer, index) => {
        let statusText = offer.querySelector(".status");
        let button = offer.querySelector(".charge-btn");

        if (availableOffers.has(index)) {
            // Ouvrir l'offre
            offer.classList.remove("expired");
            statusText.textContent = "Disponible ✅";
            button.textContent = "Recharger";
            button.classList.remove("disabled");
            button.disabled = false;
            button.onclick = function() { charge(this); };
        } else {
            // Fermer l'offre
            offer.classList.add("expired");
            statusText.textContent = "Expiré ❌";
            button.textContent = "Expiré ❌";
            button.classList.add("disabled");
            button.disabled = true;
        }
    });
}

// Exécuter au chargement de la page
updateOffers();

// Mettre à jour toutes les 30 minutes
setInterval(updateOffers, 30 * 60 * 1000);

// Minuteur
let countdownElement = document.getElementById("countdown");
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
        document.getElementById("offers").style.display = "none";
    }
}

updateTimer();
