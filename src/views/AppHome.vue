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
            <h3>
                Loading...
            </h3>
        </div>
    </div>
</template>

<style></style>