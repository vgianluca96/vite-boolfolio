<script>

import { state } from '../state.js';
import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: 'ProjectsView',
    components: {
        ProjectCard,
        Pagination
    },
    data() {
        return {
            state,
        }
    },
    mounted() {
        state.apiTechnologies();
    }
}
</script>

<template>
    <div class="container py-4">

        <h1>
            All Projects
        </h1>

        <Pagination />

        <div class="row g-2">
            <div class="col-12 col-md-9">
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2" v-if="state.projects">
                    <ProjectCard v-for=" project in state.projects " :project="project" />
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
            <div class="col-12 col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Projects filtered per Technology:
                        </div>
                        <nav class="nav flex-column">
                            <router-link v-for="technology in state.technologies"
                                :to="{ name: 'projects-tech', params: { slug: technology.slug } }" class="nav-link">
                                {{ technology.slug }}
                            </router-link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style></style>