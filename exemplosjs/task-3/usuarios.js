'use strict';

const app = Vue.createApp({
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      try {
        const retorno = await fetch('https://reqres.in/api/users?per_page=10');
        if (!retorno.ok) {
          throw new Error('Erro ao carregar os usuários');
        }
        const dadosSite = await retorno.json();
        this.users = dadosSite.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}).mount('#usuarios');
