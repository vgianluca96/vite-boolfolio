<script>

import axios from '../../node_modules/axios'

export default {
  name: 'Projects',
  data() {
    return {
      url: 'http://127.0.0.1:8000/api/projects',
      projects: null,
      message: 'hello vite',
    }
  },
  methods: {
  },
  mounted() {
    axios
      .get(this.url)
      .then(response => {
        console.log(response.data);
        this.projects = response.data.result.data
        console.log(this.projects);
      });
  }
}

</script>

<template>
  <div class="container py-4">
    <h1 class="text-center">
      All Projects
    </h1>

    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-4 g-2">
      <div class="col" v-for="project in projects">
        <div class="card">
          <img src="" alt="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">
              {{ project.title }}
            </h5>
            <p class="card-text">
              testo
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
