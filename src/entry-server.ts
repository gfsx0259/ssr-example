import { renderToString } from 'vue/server-renderer'
import {createPinia} from "pinia";
import {createSSRApp} from "vue";
import App from "./App.vue";

export async function render(_url: string) {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {}
  const html: string = await renderToString(app, ctx)
  const state: string = JSON.stringify(pinia.state.value);
  const head: string = `<script>var __STATE__  = '${state}'</script>`

  console.log('server');
  console.log(pinia.state.value)
  return { html, head }
}
