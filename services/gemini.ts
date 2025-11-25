import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "The Architect," a helpful AI assistant for DigitalNexus. 
The website you are on is a "living blueprint" of a digital agency.
Your role is to guide users through the floor plan (the website) and explain the services.
Keep answers concise, technical yet accessible, and use architectural or construction metaphors where appropriate.
Services include: SaaS Development, AWS DevOps, AI Software, and Autonomous Agents.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToArchitect = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Blueprint unclear. Please restate query.";
  } catch (error) {
    console.error("Architect Connection Lost:", error);
    return "Connection to Mainframe interrupted. Please try again.";
  }
};
