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

// تشغيل المؤقت عند تحميل الصفحة
window.onload = function () {
    let countdownElement = document.getElementById("countdown");
    let offersElement = document.getElementById("offers");
    let timeLeft = 120; // 2 دقائق

    function updateTimer() {
        if (!countdownElement || !offersElement) return; // التأكد من أن العناصر موجودة

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        } else {
            countdownElement.textContent = "Expiré ❌";
            offersElement.innerHTML = "<p style='color: red; font-size: 20px; font-weight: bold; text-align: center;'>Toutes les offres sont expirées ❌</p>";
        }
    }

    // تحسين وضوح المؤقت بتكبير حجمه وإعطائه لونًا واضحًا
    countdownElement.style.fontSize = "22px";
    countdownElement.style.fontWeight = "bold";
    countdownElement.style.color = "red";

    updateTimer();
};
