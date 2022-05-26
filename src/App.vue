<template>
  <div id="app">
    <Header></Header>
    <Login></Login>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Header,
    Login
  }
}

</script>

