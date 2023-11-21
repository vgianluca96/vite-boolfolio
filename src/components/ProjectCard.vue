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
        <span class="badge bg-success me-1" v-for="technology in project.technologies">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-file-earmark-code" viewBox="0 0 16 16">
            <path
              d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            <path
              d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
          </svg> {{ technology.name }}
        </span>
        <div class="d-flex justify-content-end mt-3">
          <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-light">
            Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-arrow-return-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
