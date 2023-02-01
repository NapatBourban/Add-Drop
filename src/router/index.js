import { createRouter, createWebHistory } from "vue-router";
import News from "../views/News.vue";
import Subject from "../views/subject.vue";
import AddDrop from "../views/Add-Drop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
    },{
      path: "/",
      name: "News",
      component: News,
    },{
      path: "/Subject",
      name: "Subject",
      component: Subject,
    },{
      path: "/AddDrop",
      name: "AddDrop",
      component: AddDrop,
    },
  ],
});

export default router;
