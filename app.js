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
      // textColor: '#e2e8f0',
      // bgColor: '#1e293b'
      styles: {
        backgroundColor: '#1e293b',
        color: '#e2e8f0',
        padding: '5px 15px',
        borderRadius: '8px'
      },
      themeBlack: true
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
    },

    toggleTheme () {
      this.themeBlack = !this.themeBlack

      if (this.themeBlack) {         
        this.styles.backgroundColor = '#f97316'
        this.styles.color = '#0f172a'
      } else {
        this.styles.backgroundColor = '#1e293b'
        this.styles.color = '#e2e8f0'
      }
    }
  },

  computed: {
    fullname () {
      return this.name + ' ' + this.lastname
    }
  }
}

Vue.createApp(app).mount('#app')