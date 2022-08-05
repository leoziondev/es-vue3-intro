const productDetail = {
  template: `
    <img :src="product.image" :alt="product.title" style="width: 200px" class="h-72 object-cover" />
    <p class="text-slate-200 font-semibold text-md mt-1">{{ product.title }}</p>
    <p v-if="product.stars > 0" class="text-xs">
      <strong>{{ product.stars }}</strong> Avaliações
    </p>
    <div class="mt-3">
      <button
        @click.prevent="addCart(product)"
        :disabled="productInCart"
        :class="[
          'bg-teal-300 hover:bg-teal-400 text-slate-900 font-semibold tracking-wilder py-1 px-4 rounded-md disabled:opacity-25',
          {'button-disabled' : productInCart}
        ]"
      >
        Add cart
      </button>
    </div>
  `,

  emits: ['addToCart'],

  props: {
    product: {
      type: Object,
      required: true,
    },
    productInCart: {
      type: Boolean,
      required: true,
    }
  },

  data() {
    return {
      foo: 'bar'
    }
  },

  methods: {
    addCart (product) {
      this.$emit('addToCart', product)
    }
  }
}

app.component('product-detail', productDetail)