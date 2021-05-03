// https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
import { createWebHistory, createRouter } from "vue-router";
import AppCombatTricks from '../components/AppCombatTricks'
import AppCurrentDeck from '../components/AppCurrentDeck'
import NotFound from '../components/NotFound'
import { publicPath } from '../../vue.config'

const routes = [
    {
        path: "/",
        name: "Home",
        component: AppCombatTricks,
    },
    {
        path: "/combat-tricks",
        name: "CombatTricks",
        component: AppCombatTricks,
    },
    {
        path: "/sprites",
        name: "Sprites",
        component: AppCurrentDeck,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: publicPath,
    routes,
});

export default router;