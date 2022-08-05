<template>
  <div class="exercise">
    <img class="imgExercise" src="../assets/dumbbell.svg" alt="Logo">
    <div class="strength">
      <p>strength</p>
    </div>
    <p class="exerciseOne">Exercise #1</p>
  </div>
</template>

<script>
export default {
  name: "ExerciseComponent"
}
</script>

<style scoped>
.exercise{
  width: 200px;
  height: 250px;
  background-color: #efefef;
  margin-left: 245px;
  margin-top: 40px;
  padding: 4px;
  box-shadow: 0 4px 4px #e3e1e1;
}

.exercise .strength{
  margin-top: 130px;
  margin-left: 50px;
  width: 85px;
  height: 25px;
  background-color: #67ceb7;
  border-radius: 7px;
}

.exercise .strength p{
  text-align: center;
  margin-top: -110px;
  padding-top: 3px;
  color: white;
  font-size: 15px;
}

.exercise .imgExercise{
  width: 150px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
}

.exercise:hover{
  cursor: pointer;
}

.exercise p{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 30px;
}
</style>