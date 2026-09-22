import { products } from '@/data/products'

const FilterLogic = {
  data() {
    return {
      searchedKey: null,
      category: 'all',
      company: 'all',
      price: 1000,
    }
  },
  computed: {
    filterProducts() {
      let filteredProducts = products
      if (this.searchedKey) {
        filteredProducts = filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(this.searchedKey.toLowerCase()),
        )
      }
      if (this.category !== 'all') {
        filteredProducts = filteredProducts.filter((product) => product.category === this.category)
      }
      if (this.company !== 'all') {
        filteredProducts = filteredProducts.filter(
          (product) => product.company.toLowerCase() === this.company.toLowerCase(),
        )
      }
      if (this.price < 1000) {
        filteredProducts = filteredProducts.filter((product) => +product.price <= +this.price)
      }

      return filteredProducts
    },
  },
  methods: {
    handleChange() {
      this.$emit('updateProducts', this.filterProducts)
    },
    reset() {
      this.searchedKey = null
      this.category = 'all'
      this.company = 'all'
      this.price = 1000
      this.handleChange()
    },
  },
  emits: ['updateProducts'],
}
export default FilterLogic
