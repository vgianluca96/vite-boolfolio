<script>

import { state } from '../state.js';

import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: 'AppProjects',
    components: {
        ProjectCard,
        Pagination
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <main>
        <div class="container py-4">
            <h1>
                All Projects
            </h1>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-4 g-2" v-if="state.projects">
                <ProjectCard v-for="project in state.projects" :project="project" />
            </div>
            <div v-else>
                <h3>
                    Loading...
                </h3>
            </div>

            <Pagination />
        </div>
    </main>
</template>

<style></style>