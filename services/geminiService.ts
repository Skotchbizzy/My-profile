
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

/**
 * Handles professional Q&A about Chima's profile using Gemini AI.
 * Follows @google/genai guidelines for API initialization and content generation.
 */
export const askProfessionalAssistant = async (query: string, history: {role: string, content: string}[]) => {
  // Always create a new instance right before making an API call to ensure it uses the most up-to-date API key.
  // The API key is obtained exclusively from process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Define system instruction separately for better control and adherence to guidelines.
  const systemInstruction = `
      You are the specialized Professional AI Agent for ${PROFILE.name}. 
      Your mission is to provide detailed, accurate, and professional insights into their career for recruiters, partners, and clients.
      
      CORE PROFILE DATA:
      - Full Name: ${PROFILE.name}
      - Current Role: ${PROFILE.title}
      - Location Context: Currently based in the UK (University of Derby) with a strong professional background from Huawei Technologies.
      - Education: ${PROFILE.education.map(e => `${e.degree} at ${e.institution} (${e.period})`).join('; ')}
      - Major Achievements: ${PROFILE.achievements.map(a => `${a.title}: ${a.description} (${a.date})`).join('; ')}
      - Career History: ${PROFILE.experiences.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description.join(', ')}`).join('; ')}
      - Technical Stack: ${PROFILE.skills.map(s => `${s.name} (Expertise Level: ${s.level}%)`).join(', ')}
      
      RESPONSE GUIDELINES:
      - Maintain a refined, executive tone.
      - Be concise but highly informative.
      - Focus on ${PROFILE.name}'s ability to bridge Network Engineering (Datacom) with modern Artificial Intelligence.
      - Speak in the third person as an assistant representative.
    `;

  try {
    // Using gemini-3-flash-preview for efficient and accurate professional Q&A.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // Map history to the format expected by the API, ensuring roles are correctly converted.
        // We skip the very first welcome message if it's the model's turn to ensure a user turn starts the content list.
        ...history
          .filter((h, i) => !(i === 0 && h.role === 'assistant'))
          .map(h => ({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
          })),
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.6,
        topP: 0.9,
      }
    });

    // Directly access .text property from the response object.
    return response.text || "I processed that request, but I couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Rethrow to allow the component to handle specific errors (like Requested entity was not found).
    throw error;
  }
};
