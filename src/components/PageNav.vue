<template>
  <nav>
    <div class="container">
      <div class="logo">C</div>
      <ul class="links">
        <li v-for="link in $router.options.routes" :key="link.name">
          <router-link class="link" :to="{ name: link.name }">{{ link.meta.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
}
</script>

<style>
nav {
  height: 64px;
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg-bright);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links {
      display: flex;
      align-items: center;
      gap: 10px;
      .link {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: inherit;
        transition: 0.3s;
        cursor: pointer;
        text-decoration: none;
      }
      .router-link-exact-active {
        color: white;
        background-color: var(--main-bg-bright);
      }
      .link:not(.router-link-exact-active):hover {
        background-color: #dee5f0;
      }
    }
  }
  .logo {
    width: fit-content;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    border-radius: 8px;
    color: white;
    background-color: var(--main-color-bright);
  }
}
@media (max-width: 400px) {
  nav .container .links .link {
    font-size: 14px;
  }
}
</style>
