<script>

import axios from '../../node_modules/axios'
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      url: 'http://127.0.0.1:8000/api/projects',
      projects: null,
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
    <h1>
      All Projects
    </h1>

    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-4 g-2">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style></style>
