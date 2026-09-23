<template>
  <section :class="`products ${className}`">
    <div class="container">
      <slot name="secTitle"></slot>
      <div
        :class="`content ${isLinear ? 'linear-layout' : 'grid-layout'}`"
        :style="`grid-template-columns: ${isLinear ? 'repeat(1fr)' : 'repeat(auto-fill, minmax(300px, 1fr))'};`"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :image="product.image"
          :price="product.price"
          @tryEmit="($event) => console.log($event)"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsSection',
  props: {
    products: {
      type: Array,
    },
    isLinear: {
      type: Boolean,
    },
    className: {
      type: String,
    },
  },
  components: {
    ProductCard,
  },
}
</script>
<style>
.products {
  margin-bottom: 3rem;
}
.products .info {
  margin-top: 3rem;
}
/* layout control */
.products .info {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e2e8f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px;
  }
  .layout-controllers {
    display: flex;
    align-items: center;
    gap: 8px;
    button {
      height: 2.5rem;
      width: 2.5rem;
      font-size: 1.25rem;
      border: none;
      color: #394e6a;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;
      line-height: 15px;
    }
    button:not(.selected):hover {
      background-color: #394e6a33;
    }
    .selected {
      color: #dbe1ff;
      background-color: var(--main-color-bright);
    }
  }
}
/* products */
.products .content {
  display: grid;
  gap: 16px;
}
</style>
