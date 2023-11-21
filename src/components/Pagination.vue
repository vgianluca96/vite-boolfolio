<script>

import { state } from '../state.js';

export default {
  name: 'Pagination',
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
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
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
</template>

<style></style>
