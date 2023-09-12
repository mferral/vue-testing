// Composables
import { createRouter, createWebHistory } from "vue-router";

function guardMyroute(to: any, from: any, next: any) {
  const isValidate = () => {
    const token = localStorage.getItem("token");
    // if (token) {
    //       const data = atob(token.split(".")[1]);
    //       const exp = JSON.parse(data).exp;
    //       if (exp < Date.now() / 1000) {
    //         // console.log('expiro');
    //         localStorage.removeItem("token");
    //       }
    //     }      
    // }
    return (!token) ? false : true
  }
  if (isValidate()) next(); else next("/login");
}

const routes = [
  {
    path: "/",
    component: () => import("@/layout/quasar-classic.vue"),
    beforeEnter: guardMyroute,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/Home.vue"),
      },
      {
        path: "/posts",
        name: "Posts",
        component: () => import("@/views/Posts.vue"),
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
