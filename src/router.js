import { createRouter, createWebHistory } from "vue-router";

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import NotFoundView from './views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView
        },
    ]
});

export { router };