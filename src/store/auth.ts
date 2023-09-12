// Utilities
import { defineStore } from "pinia";
import { HttpPost } from "@/utils/http";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        loading: false,
        error: false,
    }),
    actions: {
        async login(identifier: String, password: String) {
            this.$state.loading = true;
            localStorage.clear()
            await new Promise(resolve => setTimeout(resolve, 2000));
            const res = await HttpPost("auth/local", { identifier, password })
            console.log(res);

            if (res.data.jwt) {
                localStorage.setItem("token", res.data.jwt);
                window.location.href = "/";
            }
            this.$state.loading = false;
        },
    },
});
