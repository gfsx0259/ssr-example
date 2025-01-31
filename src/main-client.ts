import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import AppWindow from "./window.ts";

declare let window: AppWindow;

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)

  pinia.state.value = JSON.parse(window.__STATE__)
  console.log('client', window);
  return { app }
}
