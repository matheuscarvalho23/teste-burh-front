<script>
import api from "../services/api";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  name: 'Register',
  data() {
    return {
      pet: {
        name: '',
        age: '',
        adoptionDate: null,
        gender: null,

        genders: ["Macho", "Fêmea"]
      },

      loading: false,
    }
  },
  methods: {
    handleRegister() {
      this.loading = true;
      api
        .post('register', {
          name: this.pet.name,
          age: this.pet.age,
          adoptionDate: this.pet.adoptionDate,
          gender: this.pet.gender,
        })
        .then(response => {
          if (response.status === 200) {
            this.$noty.success('Pet registrado com sucesso !', {
              layout: 'topLeft',
            });
          } else {
            this.$noty.error('Ocorreu um erro ao realizar o cadastro!', {
              layout: 'topLeft',
            })
          }
          this.loading = false;
        });
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="container-header">
      <h2 class="container-title">Cadastrar pet</h2>
    </div>

    <div class="container-form">
      <form @submit.prevent="handleRegister">
        <label class="form-label" for="name">Nome</label>
        <input type="text" class="form-input" id="name" placeholder="Insira o nome do seu Pet" v-model="pet.name">

        <label class="form-label" for="name">Idade</label>
        <input type="number" min="0" class="form-input" placeholder="Insira a idade do seu Pet" id="age" v-model="pet.age">

        <label class="form-label" for="name">Data da adoção</label>
        <input type="date" min="0" class="form-input" id="age" v-model="pet.adoptionDate">

        <label class="form-label" for="name">Gênero</label>
        <select id="gender" v-model="pet.gender" class="form-input">
          <option v-for="(opt, index) in pet.genders" :value="index" :key="index">{{opt}}</option>
        </select>

        <button type="submit" class="form-button">
          Cadastrar
          <p v-if="loading">...</p>
        </button>
      </form>
    </div>

  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 560px;
    height: auto;
    padding: 30px;

    background: var(--white);
    box-shadow: 0 2px 4px rgba(30,60,90,.1);
    border-radius: 3px;
  }

  .container-header {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container-title {
    color: var(--primary);
  }

  .container-form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .form-label {
    color: var(--gray);
    margin: 10px;
    font-size: .900em;
  }

  .form-input {
    width: 100%;
    height: calc(1.5em + 1.25rem + 2px);
    padding: .75em 1em;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #32325d;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    box-shadow: 0 3px 2px rgba(233,236,239,.05);
    transition: all .15s cubic-bezier(.68,-.55,.265,1.55);
    margin: 10px;
  }

  .form-button {
    width: 100%;
    margin: 10px;
    height: calc(1.5em + 1.25rem + 2px);
    background: var(--primary);
    color: var(--white);
    border: 0;
    border-radius: .25rem;
  }

  .form-button:hover {
    opacity: 90%;
  }
</style>
