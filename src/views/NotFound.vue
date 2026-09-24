<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>Page is Not Found!</p>
      <router-link to="/" class="btn">Back to Home</router-link>
    </div>
  </div>
</template>
<style>
.not-found {
  .container {
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 100px;
    }
    p {
      font-size: 18px;
      margin-bottom: 16px;
    }
    .btn {
      width: fit-content;
      text-decoration: none;
    }
  }
}
</style>
