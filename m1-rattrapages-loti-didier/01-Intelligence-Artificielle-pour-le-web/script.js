const form = document.getElementById("horoscope-form");
const resultHoroscope = document.getElementById("result-horoscope");
const apiKey = "ma clé api";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const birthday =document.getElementById("birthday").value;

    try {
        const response = await fetch("http://localhost:3000/api/horoscope", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ birthday })
          });
      
          const data = await response.json();
          resultHoroscope.textContent = data.horoscope;
    
    }catch (error) {
        console.error("Erreur lors de la récupération de l'horoscope:", error);
        resultHoroscope.textContent = "Erreur lors de la récupération de l'horoscope";
    }

});