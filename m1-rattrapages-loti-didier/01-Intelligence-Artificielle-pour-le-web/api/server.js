import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const apiKey = process.env.OPENAI_API_KEY;

app.post("/api/horoscope", async (req, res) => {
    const { birthday } = req.body;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ${apiKey}"
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
        res.json({ horoscope: data.choices[0].message.content });
        resultHoroscope.textContent = receivedHoroscope;
    
    }catch (error) {
        console.error("Erreur lors de la récupération de l'horoscope:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

app.listen(3000, () => {
    console.log("Serveur backend démarré sur http://localhost:3000");
});