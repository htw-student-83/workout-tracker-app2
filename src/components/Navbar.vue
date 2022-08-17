<template>
  <div class="nav">
    <div class="logo">
      <img class="imgNavbar" src="../assets/dumbbell.svg" alt="Logo"><p>Active Tracker</p>
    </div>
    <div class="links">
      <div class="buttonHome">
        <router-link to="/exercise">Home</router-link>
      </div>
      <div class="buttonLogin">
        <router-link to="/loginbox">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  setup(){
    //get user from store

    //setup ref to router

    //Logout function
    return{};
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: #67ceb7;
}

.nav .logo{
  color: white;
  font-family: Arial,sans-serif;
  font-weight: bold;
  padding-top: 20px;
}

.nav .links{
  display: flex;
  padding-top: 20px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.buttonHome a{
  margin-right: 40px;
  margin-left: 20px;
  color: white;
  text-decoration: none;
}

.buttonLogin a{
  margin-right: 40px;
  margin-left: 20px;
  color: white;
  text-decoration: none;
}

.logo{
  display: flex;
  justify-content: space-between;
  width: 170px;
  height: 50px;
}
.logo .imgNavbar{
  margin-top: -10px;
}
</style>
