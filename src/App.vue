<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header />

  <main>
    <router-view></router-view>
  </main>

  <footer>

  </footer>
</template>

<style></style>
