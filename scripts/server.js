import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: "AIzaSyA-XV7eXxrLhw8AOUkJN_owI7YKZ6tURAI" });

async function main() {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
    config: {
        thinkingConfig: {
            thinkingBudget: 0
        },
    },
    });
    console.log(response.text);
}

main();