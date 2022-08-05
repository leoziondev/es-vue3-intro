const exampleForm = {
  template: `
    <div class="bg-slate-800 rounded-md p-4 my-12">
      <form action="#" method="post" @submit.prevent="submitForm">
        <div class="mb-3">
          <label htmlFor="name">Nome</label>
          <input v-model="name" type="text" name="name" class="block w-full bg-slate-900 rounded-md py-1 px-3 mt-1" />
          <span v-if="errors.name" class="text-red-500 text-xs italic">{{ errors.name }}</span>
        </div>
        <div class="mb-3">
          <label htmlFor="genre">Nome</label>
          <select v-model="genre" name="genre" class="block w-full bg-slate-900 rounded-md py-1 px-3 mt-1">
            <option value="">Selecioneuma opção</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>
        <div class="mb-3">
          <label htmlFor="description">Descrição</label>
          <textarea v-model="description" name="description" rows="3" class="block w-full bg-slate-900 rounded-md py-1 px-3 mt-1"></textarea>
        </div>
        <div class="mb-3">
          <input v-model="agree" type="checkbox" name="agree" class="bg-slate-900 rounded-md py-1 px-3 mt-1 mr-2" />
          <label htmlFor="agree">Concordo</label>
        </div>
        <div class="mt-5 text-right">
          <button type="submit" class="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold rounded-md py-1 px-4">Enviar</button>
        </div>
      </form>
    </div>
  `,

  data() {
    return {
      name: 'Jhon Doe',
      genre: '',
      description: '',
      agree: true,

      errors: {
        name: ''
      }
    }
  },

  methods: {
    submitForm () {
      if (this.name === '') {
        this.errors.name = 'Por favor preencha o nome'
        
        return
      }

      console.log(this.name);
      console.log(this.genre);
      console.log(this.description);
      console.log(this.agree);

      this.resetForm()
    },

    resetForm () {
      this.errors = {
        name: ''
      }

      this.name = ''
      this.genre = ''
      this.description = ''
      this.agree = true
    }
  }
}

app.component('example-form', exampleForm)