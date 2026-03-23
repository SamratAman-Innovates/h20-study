import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return new Response('GROQ_API_KEY is not set. Please add it to your .env.local file.', { status: 500 });
    }

    const result = await streamText({
      model: groq('llama3-8b-8192'), // Lightning fast Groq model
      messages,
      system: `You are a helpful, encouraging, and knowledgeable teacher for the H2O Study platform. 
Your goal is to help students learn by providing clear explanations, guiding them to find answers rather than just giving them away, and maintaining a positive, educational tone. 
Always be polite and structured in your answers. Use simple language and break down complex topics into easy-to-understand parts.
Do not mention that you are an AI unless explicitly asked. Treat the user as a student seeking knowledge.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI Error:", error);
    return new Response('An error occurred during text generation.', { status: 500 });
  }
}
