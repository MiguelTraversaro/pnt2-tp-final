<template>
  <div class="">
    <Nav/>
    <router-view class=""></router-view>
    <br><br><br>
    <Footer/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
};
</script>

<style>
</style>
