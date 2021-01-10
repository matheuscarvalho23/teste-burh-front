<script>
import api from "../services/api";

export default {
  name: 'Pets',
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
          if (response.data.status === 201) {
            console.log(response);
          }
        })
    },
  },
  mounted() {
    this.getPets();
  }
}
</script>

<template>
  <div class="container">
    
  </div>
</template>

<style scoped src="@/assets/styles/pets.css">
</style>
