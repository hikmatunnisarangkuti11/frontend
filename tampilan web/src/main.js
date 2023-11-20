import "@/assets/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Portfolio from "@/pages/Portfolio.vue";
import Contact from "@/pages/Contact.vue";



const routes = [
  {
    path: "/",
    name:"home",
    component: Home,
  },
  {
    path: "/Portfolio",
    name:"portfolio",
    component:Portfolio
  },
  {
    path: "/Contact",
    name:"contact",
    component:Contact
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
