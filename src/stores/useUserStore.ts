import { defineStore } from "pinia";
import {Ref, ref} from "vue";
import useApi from "../compositions/useApi.ts";
import { User } from "../compositions/useUsers.ts";

const items: Ref<User[]> = ref([]);

export const useUserStore = defineStore('user',
    {
        state: () => {
            async function init() {
                const { data: { users } } = await useApi().getUsers()
                items.value = users;
            }

            return { init, items }
        },
    })