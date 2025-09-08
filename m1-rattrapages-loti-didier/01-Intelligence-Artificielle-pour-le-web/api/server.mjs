import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    console.error("Clé API OpenAI manquante !");
    process.exit(1); // stoppe le serveur si clé absente
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/horoscope", async (req, res) => {
    const { birthday, theme } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Tu es un expert en astrologie qui donne des horoscopes en une seule phrase, toujours en fonction de la date de naissance et du thème demandé"
                },
                {
                    role: "user",
                    content: `Je suis né le ${birthday}. Donne moi mon horoscope du jour concernant au thème de ${theme}, en une seule phrase.`
                }
            ],
            max_tokens: 50,
        });

        res.json({ horoscope: completion.choices[0].message.content });
        
    } catch (error) {
        console.error("Erreur lors de la récupération de l'horoscope:", error);
        return res.status(500).json({ error: "Erreur lors de la génération de l'horoscope" });
    }
});

app.listen(3000, () => {
    console.log("Serveur backend démarré sur http://localhost:3000");
});
