<script>
import api from "../services/api";
import { required } from "vuelidate/lib/validators";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  name: 'Edit',
  data() {
    return {
      pet: {
        id: this.$route.params.id,
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
    handleEdit() {
      this.loading = true;
      if (this.$v.$invalid) {
        this.loading = false;
        this.$noty.error('Todos os campos são obrigatórios !', {
          layout: 'topRight',
        });
        return;
      } else {
        api
          .put(`pets/${this.$route.params.id}`, {
            name: this.pet.name,
            age: this.pet.age,
            adoptionDate: this.pet.adoptionDate,
            gender: this.pet.gender,
          })
          .then(response => {
            if (response.status === 200) {
              this.pet.name         = '';
              this.pet.age          = '';
              this.pet.adoptionDate = '';
              this.pet.gender       = '';
              this.$v.$reset();

              this.$noty.success('Pet editado com sucesso !', {
                layout: 'topRight',
              });
            } else {
              this.$noty.error('Ocorreu um erro ao editar o pet!', {
                layout: 'topRight',
              });
            }
            this.loading = false;
          });
      }
    },

    getPet() {
      api
        .get(`pets/${this.$route.params.id}`)
        .then(response => {
          this.pet.name         = response.data.name;
          this.pet.age          = response.data.age;
          this.pet.adoptionDate = response.data.adoptionDate;
          this.pet.gender       = response.data.gender;
        })
    }
  },
  mounted() {
    this.getPet();
  }
}
</script>

<template>
  <div class="container">
    <div class="container-header">
      <h2 class="container-title">Editar pet</h2>
    </div>

    <div class="container-form">
      <form @submit.prevent="handleEdit">
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
          <p v-if="loading">Enviando dados...</p>
          <p v-else>Editar</p>
        </button>
      </form>
    </div>

  </div>
</template>

<style scoped src="@/assets/styles/register.css">
</style>
