<template>
  <KeepAlive>
    <ProductsFilter @updateProducts="($event) => onUpdateProducts($event)" />
  </KeepAlive>
  <ProductsSection :isLinear="isLinear">
    <template #secTitle>
      <div class="info" style="margin-bottom: 3rem">
        <p>{{ products.length }} Products</p>
        <div class="layout-controllers">
          <button @click="isLinear = true" :class="isLinear ? 'selected' : ''">
            <TextAlignJustify />
          </button>
          <button @click="isLinear = false" :class="!isLinear ? 'selected' : ''">
            <LayoutGrid />
          </button>
        </div>
      </div>
    </template>
  </ProductsSection>
</template>
<script>
import ProductsFilter from '@/components/ProductsFilter.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import { products } from '@/data/products'
import { LayoutGrid, TextAlignJustify } from 'lucide-vue-next'

export default {
  data() {
    return {
      products,
      isLinear: false,
    }
  },
  components: {
    TextAlignJustify,
    LayoutGrid,
    ProductsSection,
    ProductsFilter,
  },
  methods: {
    onUpdateProducts(filteredProducts) {
      this.products = filteredProducts
      console.log(filteredProducts)
    },
  },
  provide() {
    return {
      products,
    }
  },
}
</script>
