<template>
  <div class="nav-loged">
    <div class="logo">
      <img class="imgNavbar" src="../assets/dumbbell.svg" alt="Logo"><p>Active Tracker</p>
    </div>
    <div class="links">
      <div class="buttonHome"><router-link to="/exercise">Home</router-link></div>
      <div class="buttonCreate"><router-link to="/CreateNewExercise">Create</router-link></div>
      <div class="buttonLogout">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "successfulLogin",
  setup(){
    //get user from store

    //setup ref to router

    //Logout function
    return{};
  },
}
</script>

<style scoped>
.nav-loged{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: #67ceb7;
}

.nav-loged .logo{
  color: white;
  font-family: Arial,sans-serif;
  font-weight: bold;
  padding-top: 20px;
  margin-left: 35px;
}

.nav-loged .links{
  display: flex;
  padding-top: 20px;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
}

.buttonHome{
  margin-right: 40px;
}

.buttonHome a{
  color: white;
  text-decoration: none;
}

.buttonCreate{
  margin-right: 40px;
}

.buttonCreate a{
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