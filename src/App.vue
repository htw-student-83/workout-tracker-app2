<template>
  <Navbar/>
  <LoginComponent/>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import Registration from './components/RegistrationComponent.vue'
//import StartseiteComponente from "@/components/StartseiteComponente";
import LoginComponent from "@/components/LoginComponent";
export default {
  name: 'App',
  components: {
    LoginComponent,
    Navbar,
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

</style>
