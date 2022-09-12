import { createRouter, createWebHistory } from "vue-router";
import About from './components/About.vue';
import HelloWorld from './components/HelloWorld.vue';
// import Form from './components/Form.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes = [
    {
        name: 'HelloWorld',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'About',
        path: '/About',
        component: About
    },
    {
        name: 'Form',
        path: '/Form/:name',
        component: () =>
        import("./components/Form.vue")
        // import component with function 
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'nav-active'
    // router-link-active-class name change = "nav-active"
})
export default router;