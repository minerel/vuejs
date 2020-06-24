import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "./pages/Homepage";
import Auth from "./pages/auth/Auth";
import store from "./store";
import i18n from "./i18n";

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    { path: "/", redirect: `/${i18n.locale}` },
    { path: "/auth", component: Auth },
    { path: "/:lang",
      component: Homepage,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/auth");
        }
      },
    },  
  ],
  mode: "history",
});
