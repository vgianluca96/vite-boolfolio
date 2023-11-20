<script>

export default {
  name: 'ProjectCard',
  props: ['project'],
  data() {
    return {

    }
  },
}

</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="project.preview" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">
          {{ project.title }}
        </h5>
        <p class="card-text">
          <strong>Description</strong> <br>
          {{ project.description }}
        </p>
      </div>
      <div class="card-footer">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
          class="navbar-brand">Details</router-link>
      </div>
    </div>
  </div>
</template>

<style></style>
