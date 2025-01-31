import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { ref, defineComponent, useSSRContext, createSSRApp } from "vue";
import { defineStore, createPinia } from "pinia";
import axios from "axios";
function useUsers(client) {
  async function getUsers() {
    return client.get(
      "users"
    );
  }
  return {
    getUsers
  };
}
function useApi() {
  const apiClient = axios.create({
    baseURL: "https://dummyjson.com/"
  });
  return {
    ...useUsers(apiClient)
  };
}
const useUserStore = defineStore("user", () => {
  const items = ref([]);
  async function init() {
    const { data: { users } } = await useApi().getUsers();
    items.value = users;
  }
  return { init, items };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  props: {
    msg: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useUserStore();
    store.init();
    const __returned__ = { store };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!--[-->`);
  ssrRenderList($setup.store.items, (user) => {
    _push(`<p class="user-card" data-v-e17ea971>${ssrInterpolate(user.id)} ${ssrInterpolate(user.firstName)}</p>`);
  });
  _push(`<!--]--><div class="card" data-v-e17ea971><p data-v-e17ea971> Edit <code data-v-e17ea971>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-e17ea971> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-e17ea971>create-vue</a>, the official Vue + Vite starter </p><p data-v-e17ea971> Install <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-e17ea971>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-e17ea971>Click on the Vite and Vue logos to learn more</p><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e17ea971"], ["__file", "/home/jeny/dev/ssr/create-vite-extra/template-ssr-vue-ts/src/components/HelloWorld.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _imports_0 = "/vite.svg";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div data-v-7a7a37b1><a href="https://vite.dev" target="_blank" data-v-7a7a37b1><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-7a7a37b1></a><a href="https://vuejs.org/" target="_blank" data-v-7a7a37b1><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-7a7a37b1></a></div>`);
  _push(ssrRenderComponent($setup["HelloWorld"], { msg: "Vite + Vue" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a7a37b1"], ["__file", "/home/jeny/dev/ssr/create-vite-extra/template-ssr-vue-ts/src/App.vue"]]);
function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);
  app.use(pinia);
  return { app };
}
async function render(_url) {
  const { app } = createApp();
  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
export {
  render
};
