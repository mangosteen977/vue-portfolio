import { createRouter, createWebHistory } from "vue-router"
import AboutMeView from "../components/aboutMeView.vue";
import PortfolioView from "../components/portfolioView.vue";
import ContactView from "../components/contactView.vue";

const routes = [
    {
        path : '/',
        name : 'aboutMeView',
        component : AboutMeView
    },
    {
        path : '/portfolioView',
        name : 'portfolioView',
        component : PortfolioView
    },
    {
        path : '/contactView',
        name : 'contactView',
        component : ContactView
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
});
//라우터 가드
export default router