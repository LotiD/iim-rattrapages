const form = document.getElementById("horoscope-form");
const mainCard = document.querySelector(".main_card");
const resultHoroscope = document.getElementById("result-horoscope");

// ===== On récupère l'horoscope =====

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const birthday = document.getElementById("birthday").value;
    const theme = document.getElementById("theme").value;

    
    mainCard.classList.add("hidden");

    
    resultHoroscope.textContent = "Consultation des astres...";
    resultHoroscope.classList.add("show");

    try {
        const response = await fetch("http://localhost:3000/api/horoscope", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ birthday, theme })
        });

        const data = await response.json();
        resultHoroscope.textContent = data.horoscope;

        
        const zodiacImg = document.createElement("img");
        zodiacImg.src = `assets/images/signes/${getZodiacSign(birthday)}.jfif`;
        zodiacImg.alt = "Signe du zodiaque";
        resultHoroscope.appendChild(zodiacImg);

        const backButton = document.createElement("button");
        backButton.classList.add("btn-back");
        backButton.textContent = "Retour";
        backButton.addEventListener("click", () => {
            resultHoroscope.classList.remove("show");
            setTimeout(() => {
                horoscopeText.textContent = "";
                zodiacImageContainer.innerHTML = "";
            }, 500);
            mainCard.classList.remove("hidden");
        });
        resultHoroscope.appendChild(backButton);

        
        setTimeout(() => {
            zodiacImg.classList.add("show");
        }, 50);

    } catch (error) {
        console.error("Erreur lors de la récupération de l'horoscope:", error);
        resultHoroscope.textContent = "Erreur lors de la récupération de l'horoscope";
    }
});


// ===== Fonction pour calculer le signe zodiac =====
function getZodiacSign(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "verseau";
    if((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "poissons";
    if((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "belier";
    if((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "taureau";
    if((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "gemeaux";
    if((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "cancer";
    if((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "lion";
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "vierge";
    if((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "balance";
    if((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "scorpion";
    if((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "sagittaire";
    if((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "capricorne";
}

