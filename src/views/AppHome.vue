<script>

import { state } from '../state.js';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'AppHome',
    components: {
        ProjectCard,
    },
    data() {
        return {
            state,
            url: `/latest`,
        }
    },
    methods: {

    },
    mounted() {
        state.apiCallLatest(this.url);
    }
}
</script>

<template>
    <div class="container py-4">
        <h1>This is the Home</h1>
        <h3 class="pt-2">See the latest projects</h3>

        <div class="row row-cols-3 py-4 g-2" v-if="state.projects">
            <ProjectCard v-for="project in state.projects" :project="project" />
        </div>
        <div v-else>
            <p class="text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
                Loading...
            </p>
        </div>
    </div>
</template>

<style></style>