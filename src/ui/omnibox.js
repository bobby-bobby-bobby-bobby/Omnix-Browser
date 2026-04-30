import { routeCommand } from '../core/commandRouter.js';
import { handleAIQuery } from '../ai/aiClient.js';

export async function handleInput(input) {
  const command = routeCommand(input);

  if (command.type === "NAVIGATE") {
    window.location.href = command.value;
  }

  if (command.type === "ACTION") {
    console.log("Execute action:", command.action);
  }

  if (command.type === "AI_QUERY") {
    const result = await handleAIQuery(input);
    console.log(result);
  }
}
