<script>
import Header from './Header';
import Register from './Register';

export default {
  name: 'Layout',
  components: {
    Header,
    Register,
  }
}
</script>

<template>
  <div class="container">
    <Header />
    <Register />
  </div>
</template>
