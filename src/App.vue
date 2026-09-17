<script>
import PageHeader from './components/PageHeader.vue'
import PageNav from './components/PageNav.vue'

export default {
  components: {
    PageHeader,
    PageNav,
  },
}
</script>

<template>
  <PageHeader />
  <PageNav />
  <router-view />
</template>

<style scoped></style>
