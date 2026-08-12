import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

//Inicializar cliente de la IA
const ai = new GoogleGenAI({apikey: process.env.GEMINI_API_KEY})

// Reglas y contexto de Labu

const LABU_SYSTEM_PROMPT = `
Sos Labu, el asistente virtual oficial de la plataforma LaburAPP.
Tu objetivo es ayudar a trabajadores independiente y clientes sobre dudas sobre la plataforma.
Instrucciones:
- Se amable, profesional, cercano y directo.
- Responde siempre en español.
- Si te preguntan algo que no tiene relación con el trabajo independiente o con LaburApp redirige amablemente la conversación.
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'El mensaje es requerido.' });
        }

        // Llamada al modelo de IA especificando el System Instruction
        const response = await ai.models.generateContent({
            model: 'gemini-flash-latest',
            contents: message,
            config: {
                systemInstruction: LABU_SYSTEM_PROMPT,
            }
        });

        // Devolver la respuesta generada por la IA
        res.json({ reply: response.text });

    } catch (error) {
        console.error('Error al comunicarse con la IA:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar el mensaje con Labu.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de LaburAPP corriendo en http://localhost:${PORT}`);
});