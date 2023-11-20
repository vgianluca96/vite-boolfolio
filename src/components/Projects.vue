<script>

import ProjectCard from './ProjectCard.vue';
import { state } from '../state.js';

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      state,
      current_page: 1,
    }
  },
  methods: {
    prevCall() {
      if (this.current_page > 1) {
        this.current_page--;
        state.apiCall(this.current_page);
      }
    },
    nextCall() {
      if (this.current_page < state.last_page) {
        this.current_page++;
        state.apiCall(this.current_page);
      }
    },
    pageCall(n) {
      this.current_page = n;
      state.apiCall(this.current_page);
    }
  },
  mounted() {
    state.apiCall(this.current_page);
  }
}

</script>

<template>
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

    <nav aria-label="Page navigation example py-2">
      <ul class="pagination">
        <li class="page-item">
          <a href="javascript:void(0)" class="page-link" @click="prevCall()">Prev</a>
        </li>
        <li class="page-item" :class="{ 'active': current_page == n }" v-for="n in state.last_page  ">
          <a href="javascript:void(0)" class="page-link" @click="pageCall(n)">{{ n }}</a>
        </li>
        <li class="page-item">
          <a href="javascript:void(0)" class="page-link" @click="nextCall()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
