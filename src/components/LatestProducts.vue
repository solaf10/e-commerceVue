<template>
  <ProductsSection :products="products.slice(0, 3)" className="latest-products">
    <template #secTitle> <h2 class="main-title">Latest Products</h2></template>
  </ProductsSection>
</template>
<script>
import { products } from '@/data/products'
import ProductsSection from './ProductsSection.vue'
export default {
  name: 'LatestProducts',
  data() {
    return {
      products,
    }
  },
  components: { ProductsSection },
}
</script>
<style>
.latest-products .container {
  padding: 3rem 0px;
  .main-title {
    margin-bottom: 3rem;
  }
  h2.main-title {
    padding-bottom: 1.25rem;
    text-align: left;
    font-size: 30px;
    border-bottom: 1px solid #e2e8f4;
  }
}
@media (max-width: 400px) {
  .latest-products .container {
    .content {
      grid-template-columns: unset;
    }
  }
}
</style>
