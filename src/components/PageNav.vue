<template>
  <nav>
    <div class="container">
      <div class="logo">C</div>
      <ul class="links">
        <li v-for="link in links" :key="link.id" class="link">{{ link.title }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  data() {
    return {
      links: [
        {
          id: 1,
          path: '/',
          title: 'Home',
        },
        {
          id: 2,
          path: '/about',
          title: 'About',
        },
        {
          id: 3,
          path: '/products',
          title: 'Products',
        },
      ],
    }
  },
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
      }
      .link:hover {
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
