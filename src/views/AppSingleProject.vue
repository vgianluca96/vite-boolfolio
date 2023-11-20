<script>

import { state } from '../state.js';

export default {
    name: 'AppSingleProject',
    data() {
        return {
            state,
            url: `/${this.$route.params.slug}`,
        }

    },
    methods: {

    },
    mounted() {
        state.apiCallSingle(this.url);
    }

}
</script>

<template>
    <div class="container py-4" v-if="state.project">
        <h1>
            Project <em>{{ state.project.title }}</em>
        </h1>
    </div>
    <div class="container py-4" v-else-if="state.message">
        <h1 class="text-center">
            {{ state.message }}
        </h1>
    </div>
    <div class="container py-4" v-else>
        <h3>
            Loading...
        </h3>
    </div>
</template>

<style></style>