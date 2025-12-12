import { GoogleGenAI } from "@google/genai";
import { Event } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const queryEventsWithGemini = async (
  userQuery: string,
  events: Event[]
): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, I can't access my brain right now (API Key missing). Please look at the list manually!";
  }

  const context = JSON.stringify(events);
  
  const prompt = `
    You are a helpful event concierge for a design-centric exhibition space called "Shared Spaces".
    Here is the current list of events in JSON format:
    ${context}

    User Query: "${userQuery}"

    Instructions:
    1. Answer the user's question based strictly on the provided event list.
    2. Keep the tone sophisticated, minimal, and helpful, matching the website's brand.
    3. If the user asks for a recommendation, provide one based on the context.
    4. Keep the answer concise (under 50 words if possible).
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "I couldn't find an answer to that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the event database right now.";
  }
};
