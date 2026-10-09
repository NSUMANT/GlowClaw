import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {
  const provider = createOpenRouter({
    apiKey: process.env.OPEN_ROUTER_API_KEY,
  });

  const modelID =
    process.env.OPEN_ROUTER_DEFAULT_MODEL || "openrouter/free";

  return provider(modelID);
}

