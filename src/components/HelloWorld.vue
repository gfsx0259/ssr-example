<script setup lang="ts">
import { useUserStore } from "../stores/useUserStore.ts";
import {User} from "../compositions/useUsers.ts";

defineProps<{ msg: string }>()

const store = useUserStore();
const users: User[] = store.items;
if (typeof window == "undefined") {
  store.init();
}


</script>

<template>
  <p class="user-card" v-for="user of users">
    {{ user.id }}
    {{ user.firstName }}
  </p>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.user-card {
  border: 1px solid black;
}
</style>
