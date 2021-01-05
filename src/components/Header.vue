<script>
export default {
  name: 'Header',
}
</script>

<template>
  <div class="container">
    <span class="container-logo">The Pet's</span>
    <p class="container-user">Olá, Matheus</p>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 60px;
    background: var(--white);
    box-shadow: 0 2px 4px rgba(30,60,90,.1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .container-logo {
    font-family: 'Ubuntu';
    font-size: 22px;
    color: var(--primary);
    font-weight: bold;
    text-transform: uppercase;
  }

  .container-user {
    color: var(--gray);
  }
</style>
