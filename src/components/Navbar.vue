<template>
  <div class="nav">
    <div class="logo">
      <i class="far fa-dumbbell"></i><p>Active Tracker</p>
    </div>
    <div class="links">
      <div class="buttonHome">Home</div>
      <div class="buttonLogin">Login</div>
    </div>
  </div>
  <div class="exercise">
    <div class="strength">strength</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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

.exercise{
  width: 200px;
  height: 250px;
  background-color: #efefef;
  margin: 40px 0 0 210px;
  box-shadow: 0 4px 4px #e3e1e1;
}

.strength{
  width: 80px;
  margin: 30px;
  text-align: center;
  background-color: #67ceb7;
  padding-bottom: 4px;
  border-color: #67ceb7;
  font-weight: bold;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: white;
  border-radius: 8px;
}

.exercise:hover{
  cursor: pointer;
}

</style>
