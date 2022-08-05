const app = {
  data() {
    return {
      siteName: 'VueJS 3',
      name: 'Jhon',
      lastname: 'Doe',
      products: [
        {
          id: 1,
          title: 'Pulp Fiction',
          description: 'Lorem ipsum Pulp Fictions sit dollores',
          image: './assets/images/pulp-fiction.jpg',
          stars: 3  
        },
        {
          id: 2,
          title: 'Quanto mais idiota melhor',
          description: 'Lorem ipsum Pulp Fictions sit dollores',
          image: './assets/images/quanto-mais-idiota-melhor.jpg',
          stars: 0
        },
      ],
      cart: [],
    }
  },

  methods: {
    addCart (product) {
      this.cart.push(product)
    },

    inCart (product) {
      return this.cart.indexOf(product) != -1
    },

    removeCart (product) {
      this.cart = this.cart.filter((prod) => product != prod)
    }
  },
}

Vue.createApp(app).mount('#app')