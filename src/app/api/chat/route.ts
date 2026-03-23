import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Create a custom OpenAI provider instance pointing to Pollinations (a free, public API wrapper)
// This doesn't require a real API key!
const pollinationsProvider = createOpenAI({
  baseURL: 'https://text.pollinations.ai/openai',
  apiKey: 'public-key-not-needed', // Pollinations ignores the key
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: pollinationsProvider('openai'), // Pollinations defaults to a good model
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
