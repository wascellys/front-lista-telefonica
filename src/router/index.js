import { createWebHistory, createRouter } from "vue-router"

const Cadastro = () => import('../views/Cadastro/index.vue')
const Contato = () => import('../views/Contato/index.vue')
const routes = [
  {
    path: "/contatos",
    name: "Contato",
    component: Contato,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router