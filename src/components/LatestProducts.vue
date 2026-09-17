<template>
  <section class="latest-products">
    <div class="container">
      <h2 className="main-title">Latest Products</h2>
      <div class="cards">
        <ProductCard
          v-for="product in products.slice(0, 3)"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
export default {
  name: 'LatestProducts',
  data() {
    return {
      products,
    }
  },
  components: { ProductCard },
}
</script>
<style scoped>
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
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
}
@media (max-width: 400px) {
  .latest-products .container {
    .cards {
      grid-template-columns: unset;
    }
  }
}
</style>
