export class BrowserEngine {
  constructor(adapter) {
    this.adapter = adapter;
  }

  load(url) {
    return this.adapter.load(url);
  }

  executeAction(action, payload) {
    return this.adapter.executeAction(action, payload);
  }
}
