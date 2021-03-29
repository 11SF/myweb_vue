import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/spotify/members",
    name: "SpotifyMember",
    component: () => import("../views/SpotifyMember.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/spotify/admin",
    name: "SpotifyAdmin",
    component: () => import("../views/SpotifyAdmin.vue")
  },
  {
    path: "/spotify/admin/addmember",
    name: "Addmember",
    component: () => import("../views/Addmember.vue")
  }
  
];

const router = new VueRouter({
  routes,
});

export default router;
