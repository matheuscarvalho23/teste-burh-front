<script>
// import Layout from './components/Layout.vue';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #5e72e4;
    --background: #f8f8fb;
    --text: #141414;
    --white: #fff;
    --gray: #9c9c9c;
    --gray-light: #dddddd;
    --green: #266d4d;
    --red: #ec4949;
  }
</style>
