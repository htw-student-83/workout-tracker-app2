<template>
  <successfulLogin/>
  <div class="CreateNewExercise">
    <label class="nameOfWorkout">Record Workout</label><br>
    <div class="inputNameOfWorkout">
      <label class="senddataWorkname">Workout Name</label><br>
      <input type="text" class="workoutname"><br>
    </div>
    <div class="inputTypeOfWorkout">
      <label class="senddataWorktype">Workout Type</label><br>
      <select class="typeoptions">
        <option>Select Workout</option>
        <option>Strength Training</option>
        <option>Cardio</option>
      </select>
    </div>
    <div class="listOfExercise">
      <img class="deleteTypeWorkout" src="../assets/trash.svg" alt="trash">
      <table>
        <tr>
          <td class="topic">Type</td>
          <td class="topicAtSecond">Distance</td>
          <td class="topicAtSecond">Duration</td>
          <td class="topicAtSecond">Pace</td>
        </tr>
        <tr>
          <td class="currentExercise">
            <select class="selectType">
              <option>Run</option>
              <option>Walk</option>
            </select>
          </td>
          <td class="currentExercise"><input type="text"></td>
          <td class="currentExercise"><input type="text"></td>
          <td class="currentExercise"><input type="text"></td>
        </tr>
      </table>
    </div>
    <div class="AdditionExercise">
      <p>Add Exercise</p>
    </div>
    <div class="DetailOfNewWorkout">
      <p>Record Workout</p>
    </div>
  </div>
</template>

<script>

import successfulLogin from '@/components/successfulLogin.vue'
export default {
  name: "DetailsNewWorkoutComponent",
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
.CreateNewExercise{
  width: 490px;
  height: 385px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #efefef;
  padding: 15px;
  box-shadow: 0 4px 4px #e3e1e1;
}

.nameOfWorkout{
  color: #67ceb7;
  font-family: Arial, sans-serif;
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
}

.topic{
  color: #67ceb7;
  font-size: 14px;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

tr .topicAtSecond{
  color: #67ceb7;
  font-size: 14px;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.topicAtSecond{
  padding-left: 20px;
}

input[type="text"], .typeoptions{
  margin-left: 20px;
  width: 430px;
  height: 25px;
  border: 1px solid white;
  background-color: white;
}

table{
  margin-left: 20px;
  margin-top: -20px;
}

.inputNameOfWorkout, .inputTypeOfWorkout{
  margin-top: 15px;
}

.selectType{
  width: 140px;
  height: 25px;
  border: 1px solid white;
  background-color: white;
}

.currentExercise input[type="text"]{
  width: 70px;
  margin-left: 20px;
}

.senddataWorkname, .senddataWorktype{
  margin-left: 20px;
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
  margin-top: 50px;
  margin-left: 20px;
  padding: 10px;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.DetailOfNewWorkout:hover{
  cursor: pointer;
}

.AdditionExercise{
  width: 120px;
  height: 35px;
  background-color: #67ceb7;
  text-align: center;
  margin-top: 10px;
  margin-left: 20px;
  padding: 10px;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.AdditionExercise:hover{
  cursor: pointer;
}

.deleteTypeWorkout{
  width: 14px;
  height: 14px;
  margin-left:-2px;
  margin-top: 18px;
}

.deleteTypeWorkout:hover{
  cursor: pointer;
}
</style>