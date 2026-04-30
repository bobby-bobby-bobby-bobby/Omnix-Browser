export const ChromiumStubAdapter = {
  load(url) {
    console.log("[ENGINE] Loading URL:", url);
  },

  executeAction(action, payload) {
    console.log("[ENGINE ACTION]", action, payload);
  }
};
