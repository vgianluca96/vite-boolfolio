<script>

import axios from '../../node_modules/axios'

export default {
    name: 'AppSingleProject',
    data() {
        return {
            url: `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`,
            project: null,
            message: null,
        }

    },
    methods: {
        apiCall() {
            axios
                .get(this.url)
                .then(response => {
                    console.log(response)
                    if (response.data.status == "failure") {
                        this.message = response.data.result;
                    } else {
                        this.project = response.data.result;
                    }
                });
        },
    },
    mounted() {
        this.apiCall();
    }

}
</script>

<template>
    <div class="container py-4" v-if="this.project">
        <h1>
            Project <em>{{ this.project.title }}</em>
        </h1>
    </div>
    <div class="container py-4" v-else-if="this.message">
        <h1 class="text-center">
            {{ this.message }}
        </h1>
    </div>
    <div class="container py-4" v-else>
        <h3>
            Loading...
        </h3>
    </div>
</template>

<style></style>