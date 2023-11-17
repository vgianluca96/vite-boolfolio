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
      current_page: 1,
      last_page: null,
    }
  },
  methods: {
    apiCall(postApiPage) {
      axios
        .get(this.url, {
          params: {
            page: postApiPage
          }
        })
        .then(response => {
          this.projects = response.data.result.data
          this.last_page = response.data.result.last_page
          console.log(response.data)
          console.log(response.data.result.current_page)
        });
    },
    prevCall() {
      if (this.current_page > 1) {
        this.current_page--;
        this.apiCall(this.current_page)
        console.log(this.current_page);
      }
    },
    nextCall() {
      if (this.current_page < this.last_page) {
        this.current_page++;
        this.apiCall(this.current_page)
        console.log(this.current_page);
      }
    }

  },
  mounted() {
    this.apiCall(this.current_page);
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

    <nav aria-label="Page navigation example py-2">
      <ul class="pagination">
        <li class="page-item"><button @click="prevCall()" class="btn btn-primary">Prev</button></li>
        <li class="page-item"><button @click="nextCall()" class="btn btn-primary">Next</button></li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
