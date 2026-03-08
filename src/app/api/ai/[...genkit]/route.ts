import appRoute from '@genkit-ai/next';
import { ai } from '@/ai/genkit';

// Ensure any flows are loaded for their side effects.
import '@/ai/dev';

// Vercel's default serverless timeout is 10s; increase for long-running calls.
export const maxDuration = 60;

const flow = ai.flows[0];
if (!flow) {
  throw new Error('No Genkit flows defined. Add a flow in src/ai/dev.ts.');
}

export const POST = appRoute(flow);
