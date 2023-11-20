import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import AppProjects from './views/AppProjects.vue';
import AppSingleProject from './views/AppSingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: AppSingleProject
        }
    ]
});

export { router };