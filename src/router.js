import Vue from "vue";
import Router from "vue-router";
import Serve from "./views/Serve.vue";
import Create from "./views/Create.vue";
import Events from "./views/Events.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "serve",
      component: Serve
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});
