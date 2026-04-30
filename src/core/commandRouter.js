export function routeCommand(input) {
  if (input.startsWith("http")) {
    return { type: "NAVIGATE", value: input };
  }

  if (input.includes("close tabs")) {
    return { type: "ACTION", action: "closeTabs" };
  }

  return { type: "AI_QUERY", value: input };
}
