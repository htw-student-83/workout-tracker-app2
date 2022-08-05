<template>
  <div class="nav">
    <div class="logo">
      <img class="imgNavbar" src="../assets/dumbbell.svg" alt="Logo"><p>Active Tracker</p>
    </div>
    <div class="links">
      <div class="buttonHome">Home</div>
      <div class="buttonLogin">Login</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.buttonHome{
  margin-right: 40px;
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
