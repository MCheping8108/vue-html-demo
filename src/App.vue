<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import { elbutton } from 'element-plus';
// import 'element-plus/dist/index.css';
// import App from './App.vue'

// const app = createApp(App)

// app.use(elbutton)
// app.mount('#app')

export default {
 data() {
   return {
     menuVisible: false,
   };
 },
 methods: {
   toggleMenu() {
     this.menuVisible = !this.menuVisible;
   },
 },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">test</RouterLink>
        <!-- <RouterLink to="/inputer">inputer</RouterLink> -->
        <RouterLink to="/onclick">onclick</RouterLink>
        <RouterLink to="/button">button</RouterLink>
        <RouterLink to="/bulr-login">bulr-login</RouterLink>
      </nav>
      <!-- <button @click="toggleMenu">Toggle Menu</button> -->
    </div>
  </header>

  <br>

  <RouterView />
</template>

<style>

</style>
