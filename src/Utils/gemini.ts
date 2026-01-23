import { GoogleGenAI } from "@google/genai";
import { GEMINIOPENAI_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINIOPENAI_KEY });

const getGeminiResponse = async (query: string) => {
  const result = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: query,
  });

  return result.text;
};

export default getGeminiResponse;
