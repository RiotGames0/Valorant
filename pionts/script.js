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

// المؤقت
document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    let offersElement = document.getElementById("offers");
    let timeLeft = 120; // 2 دقائق

    function updateTimer() {
        if (!countdownElement) return; // تأكد من وجود العنصر قبل المتابعة

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

    updateTimer(); // تشغيل المؤقت عند تحميل الصفحة
});
