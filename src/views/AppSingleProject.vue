<script>

import axios from '../../node_modules/axios'

export default {
    name: 'AppSingleProject',
    data() {
        return {
            url: `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`,
            //project: null,
        }

    },
    methods: {
        apiCall() {
            axios
                .get(this.url)
                .then(response => {
                    console.log(response);
                });
        },
    },
    mounted() {
        this.apiCall();
    }

}
</script>

<template>
    <div class="container">



    </div>
</template>

<style></style>