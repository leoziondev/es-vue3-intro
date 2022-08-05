const app = {
  data() {
    return {
      name: 'Jhon',
      lastname: 'Doe',
      product: {
        title: 'Pulp Fiction',
        description: 'Lorem ipsum Pulp Fictions sit dollores',
        image: './assets/images/pulp-fiction.jpg',
        stars: 3

      },
      product2: {
        title: 'Pulp Fiction',
        description: 'Lorem ipsum Pulp Fictions sit dollores',
        image: './assets/images/quanto-mais-idiota-melhor.jpg',
        stars: 0
      }
    }
  }
}

Vue.createApp(app).mount('#app')