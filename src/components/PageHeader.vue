<script>
import { Mail, Phone } from 'lucide-vue-next'
export default {
  name: 'PageHeader',
  components: {
    Mail,
    Phone,
  },
}
</script>

<template>
  <header>
    <div class="container">
      <div class="contact">
        <p>
          <Mail size="16" />
          <span>callCenter@gmail.com</span>
        </p>
        <p>
          <Phone size="16" />
          <span>+96399999280</span>
        </p>
      </div>
    </div>
  </header>
</template>
<style>
header {
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  background-color: var(--main-bg-bright);
  .contact {
    display: flex;
    align-items: center;
    gap: 16px;
    p {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
