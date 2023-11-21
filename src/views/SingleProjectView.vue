<script>

import { state } from '../state.js';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            state,
            url: `/${this.$route.params.slug}`,
        }
    },
    methods: {

    },
    mounted() {
        state.apiCallSingle(this.url, this.$router);
    }
}
</script>

<template>
    <div class="container py-4" v-if="state.project">
        <h1>
            Project <em>{{ state.project.title }}</em>
        </h1>
    </div>
    <!--
    <div class="container py-4" v-else-if="state.message">
        <h1 class="text-center">
            {{ state.message }}
        </h1>
    </div>
    -->
    <div class="container py-4" v-else>
        <p class="text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            Loading...
        </p>
    </div>
</template>

<style></style>