const form = document.getElementById("horoscope-form");
const resultHoroscope = document.getElementById("result-horoscope");
const apiKey = "ma clé api";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const birthday =document.getElementById("birthday").value;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "developer",
                        content: "Tu es un expert en astrologie et tu dois me donner un horoscope en une phrase seulement et rien d'autre"
                    },
                    {
                        role: "user",
                        content: "Je suis né le " + birthday
                    }
                ],
                max_tokens:50,
            }),
        });

        const data = await response.json();
        const receivedHoroscope = data.choices[0].message.content;
        resultHoroscope.textContent = receivedHoroscope;
    
    }catch (error) {
        console.error("Erreur lors de la récupération de l'horoscope:", error);
        resultHoroscope.textContent = "Erreur lors de la récupération de l'horoscope";
    }

});