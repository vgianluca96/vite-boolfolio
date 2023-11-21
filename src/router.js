import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import AppProjects from './views/AppProjects.vue';
import AppSingleProject from './views/AppSingleProject.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';

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
            path: '/project/:slug',
            name: 'single-project',
            component: AppSingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
});

export { router };