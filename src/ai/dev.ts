import { ai } from './genkit';
import { z } from 'genkit';

// Example flow for testing AI routes. Add your own flows here.
ai.defineFlow(
  {
    name: 'hello',
    inputSchema: z.object({
      name: z.string().optional(),
    }),
    outputSchema: z.object({
      greeting: z.string(),
    }),
  },
  async (input) => {
    return { greeting: `Hello ${input.name ?? 'world'}!` };
  }
);
