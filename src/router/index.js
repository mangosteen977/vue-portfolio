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
    routes:routes,
    scrollBehavior(to, from) {
        console.log("to", to);
      if (from.name != undefined) {
        //포트폴리오 페이지 내에서 이동
        return { left: 0, top: window.innerHeight };
      } else {
        //새로고침
        return { left: 0, top: 0 };
      }
    }
});
//라우터 가드
export default router