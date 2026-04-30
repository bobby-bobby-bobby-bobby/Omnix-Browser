import { routeCommand } from '../core/commandRouter.js';
import { handleAIQuery } from '../ai/aiClient.js';
import { BrowserEngine } from '../engine/engine.js';

class WebviewAdapter {
  constructor(webview) {
    this.webview = webview;
  }

  load(url) {
    this.webview.src = url;
  }

  executeAction(action, payload) {
    console.log('[ENGINE ACTION]', action, payload);
  }
}

async function handleInput(input, engine) {
  const command = routeCommand(input);

  if (command.type === "NAVIGATE") {
    engine.load(command.value);
  }

  if (command.type === "ACTION") {
    engine.executeAction(command.action);
  }

  if (command.type === "AI_QUERY") {
    const result = await handleAIQuery(input);
    console.log(result);
  }
}

export function initOmniboxUI() {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100vh;margin:0;">
      <input id="omnibox" type="text" placeholder="Enter URL..." style="height:40px;padding:0 10px;box-sizing:border-box;" />
      <webview id="render-area" style="flex:1;" src="https://example.com"></webview>
    </div>
  `;

  const omnibox = document.getElementById('omnibox');
  const webview = document.getElementById('render-area');
  const engine = new BrowserEngine(new WebviewAdapter(webview));

  omnibox.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      await handleInput(omnibox.value.trim(), engine);
    }
  });
}
