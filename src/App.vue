<script>
import PageHeader from './components/PageHeader.vue'
import PageNav from './components/PageNav.vue'

export default {
  components: {
    PageHeader,
    PageNav,
  },
  data() {
    return {
      isDark: localStorage.getItem('theme') === 'dark',
    }
  },
  emits: ['theme'],
  watch: {
    isDark(newVal) {
      console.log(newVal)
    },
  },
  methods: {
    changeTheme() {
      this.isDark = !this.isDark
      const theme = this.isDark ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
    },
  },
}
</script>

<template>
  <div :class="`app ${isDark ? 'dark' : 'light'}`">
    <PageHeader />
    <PageNav :isDark="isDark" @theme="changeTheme" />
    <router-view />
  </div>
</template>

<style>
.dark {
  color: white;
  background-color: var(--main-bg-dark);
}
</style>
