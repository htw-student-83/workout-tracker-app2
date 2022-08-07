<template>
  <loged/>
  <div class="CreateNewExercise">
    <label class="nameOfWorkout">Record Workout</label><br>
    <div class="inputNameOfWorkout">
      <label class="senddataWorkname">Workout Name</label><br>
      <input type="text" class="workoutname" ><br>
    </div>
    <div class="inputTypeOfWorkout">
      <label class="senddataWorktype">Workout Type</label><br>
      <select class="typeoptions">
        <option>Select Workout</option>
        <option>Strength Training</option>
        <option>Cardio</option>
      </select>
    </div>
    <div class="DetailOfNewWorkout">
      <p>Record Workout</p>
    </div>
  </div>
</template>

<script>

import loged from '@/components/successfulLogin'

export default {
  name: "NewWorkoutComponente",
  components:{
    loged,
  }
}
</script>

<style scoped>
.CreateNewExercise{
  width: 390px;
  height: 260px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: #efefef;
  padding: 15px;
  box-shadow: 0 4px 4px #e3e1e1;
}

.nameOfWorkout{
  color: #67ceb7;
  font-family: Arial, sans-serif;
  font-size: 25px;
}

input[type="text"], .typeoptions{
  width: 360px;
  height: 25px;
  border: 1px solid white;
  background-color: white;
}

.inputNameOfWorkout, .inputTypeOfWorkout{
  margin-top: 15px;
}

.senddataWorkname, .senddataWorktype{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 12px;
}

.DetailOfNewWorkout{
  width: 150px;
  height: 35px;
  background-color: #67ceb7;
  text-align: center;
  margin-top: 40px;
  padding: 10px;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.DetailOfNewWorkout:hover{
  cursor: pointer;
}

</style>