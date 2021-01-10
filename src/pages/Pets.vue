<script>
import api from "../services/api";

export default {
  name: 'Pets',
  filters: {
    convertDate(data){
        var d = new Date(data)
        return d.toLocaleDateString('pt-BR')
    }
  },
  data() {
    return {
      pets: null,
    }
  },
  methods: {
    getPets() {
      api
        .get('pets')
        .then(response => {
          if (response.status === 200) {
            this.pets = response.data;
          }
        })
    },

    deletePet(idPet) {
      api
        .delete(`pets/${idPet}`)
        .then(response => {
          if (response.status === 200) {
            this.getPets();

            this.$noty.info('Pet excluído com sucesso !', {
              layout: 'topRight',
            });
          }
        })
    }
  },
  mounted() {
    this.getPets();
  }
}
</script>

<template>
  <div class="container">
    <div class="card" v-for="(pet, index) in pets" :key="index">
      <div class="card-header border-primary">
        <p>{{pet.name}}</p> <p class="card-date">{{ pet.adoptionDate | convertDate }}</p>
        <div class="card-header-actions">
          <a v-on:click="deletePet(pet._id)">
            <i class="fas fa-pencil-alt card-edit"></i>
          </a>
          <a v-on:click="deletePet(pet._id)">
            <i class="far fa-trash-alt card-delete"></i>
          </a>
        </div>
      </div>

      <div class="card-body"></div>

      <div class="card-footer">
        <p>{{ pet.age }} anos</p>
        <p>{{ (pet.gender==0) ? 'Macho' : 'Fêmea' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/pets.css">
</style>
