<script>
export default {
  name: 'Header',
}
</script>

<template>
  <div class="container">
    <router-link :to="'/'" class="container-logo">
      The Pet's
    </router-link>
    <router-link :to="'/pets'" class="container-pets">
      Ver Pet's cadastrados
    </router-link>
  </div>
</template>

<style scoped src="@/assets/styles/header.css">
</style>
