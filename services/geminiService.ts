// This service is responsible for all interactions with the Google Gemini API.
import { GoogleGenAI } from '@google/genai';

/**
 * Fetches a curiosity from the Gemini API based on a given theme.
 * @param {string} theme - The theme for which to generate a curiosity.
 * @returns {Promise<string>} A promise that resolves to the generated curiosity text.
 * @throws {Error} Throws an error if the API call fails or returns no text.
 */
export const fetchCuriosity = async (theme: string): Promise<string> => {
  // It's assumed that process.env.API_KEY is available in the execution environment.
  // A new instance is created for each call to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
  
  // A descriptive prompt in Portuguese to guide the AI model.
  // It asks for a fascinating, fun, and informative curiosity in a single paragraph.
  const prompt = `Gere uma curiosidade fascinante sobre ${theme} em português. A resposta deve ter um tom divertido e informativo, ideal para quem ama aprender coisas novas. Apresente em um único parágrafo conciso e surpreendente.`;

  try {
    // Call the Gemini API to generate content.
    // We use the 'gemini-2.5-flash' model for its balance of speed and capability.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    // Extract the text from the response.
    const text = response.text;
    
    // If no text is returned, throw an error.
    if (!text) {
      throw new Error('A API não retornou uma curiosidade. Tente novamente.');
    }

    // Return the generated text.
    return text;
  } catch (error) {
    // Log the error to the console for debugging purposes.
    console.error('Erro ao buscar curiosidade da API Gemini:', error);
    // Re-throw a user-friendly error message.
    throw new Error('Não foi possível gerar uma curiosidade. Verifique sua conexão ou tente novamente mais tarde.');
  }
};
