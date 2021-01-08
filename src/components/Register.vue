<script>
import api from "../services/api";
import { required } from "vuelidate/lib/validators";
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
  validations: {
    pet: {
      name: { required },
      age: { required },
      adoptionDate: { required },
      gender: { required },
    },
  },
  methods: {
    handleRegister() {
      this.loading = true;
      if (this.$v.$invalid) {
        this.loading = false;
        this.$noty.error('Todos os campos são obrigatórios !', {
          layout: 'topRight',
        });
        return;
      } else {
        api
          .post('register', {
            name: this.pet.name,
            age: this.pet.age,
            adoptionDate: this.pet.adoptionDate,
            gender: this.pet.gender,
          })
          .then(response => {
            if (response.status === 201) {
              this.$noty.success('Pet registrado com sucesso !', {
                layout: 'topRight',
              });
            } else {
              this.$noty.error('Ocorreu um erro ao realizar o cadastro!', {
                layout: 'topRight',
              });
            }
            this.loading = false;
          });
      }
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
        <input
          type="text"
          class="form-input"
          id="name"
          placeholder="Insira o nome do seu Pet"
          v-model="pet.name"
        />

        <label class="form-label" for="name">Idade (anos)</label>
        <input
          type="number"
          min="0"
          class="form-input"
          placeholder="Insira a idade do seu Pet"
          id="age"
          v-model="pet.age"
        />

        <label class="form-label" for="name">Data da adoção</label>
        <input
          type="date"
          min="0"
          class="form-input"
          id="age"
          v-model="pet.adoptionDate"
        />

        <label class="form-label" for="name">Gênero</label>
        <select id="gender" v-model="pet.gender" class="form-input" >
          <option v-for="(opt, index) in pet.genders" :value="index" :key="index">{{opt}}</option>
        </select>

        <button type="submit" class="form-button">
          <p v-if="loading">Enviando dados</p>
          <p v-else>Cadastrar</p>
        </button>
      </form>
    </div>

  </div>
</template>

<style scoped src="@/assets/styles/register.css">
</style>
