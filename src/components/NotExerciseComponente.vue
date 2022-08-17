<template>
  <successfulLogin/>
  <div class="EmptyList">
    <p>Looks empty here...</p>
    <div class="createWorkout">
      <p>Create Workout</p>
    </div>
  </div>
</template>

<script>
import successfulLogin from '@/components/successfulLogin.vue' //Seite passt
export default {
  name: "NotExerciseComponente",
  components:{
    successfulLogin,
  },
  setup(){
    //get user from store

    //setup ref to router

    //Logout function
    return{};
  },
}
</script>

<style scoped>
.EmptyList{
  width: 220px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
}

.EmptyList p{
  font-family: Arial, sans-serif;
  color: black;
  font-size: 25px;
}

.createWorkout{
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 40px;
  background-color: #67ceb7;
  text-align: center;
  padding: 10px;
}

.createWorkout:hover{
  cursor: pointer;
}

.createWorkout p{
  color: white;
  font-size: 15px;
  font-weight: bold;
}

</style>