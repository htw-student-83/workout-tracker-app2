<template>
  <loged/>
  <div class="ChangeTopicOfExercise">
    <div class="editExercise_pen">
      <img src="../assets/pencil.svg" alt="pen">
    </div>
    <div class="editExercise_trash">
      <img src="../assets/trash.svg" alt="trash">
    </div>
    <div class="ChangeContentOfExercise_logo">
      <img src="../assets/dumbbell.svg" alt="Logo">
    </div>
  <div class="strength">
    <p>strength</p>
  </div>
  <div class="changeExercise">
    <input type="text">
  </div>
</div>
<div class="listOfExercise">
  <img class="deleteWholeexercise" src="../assets/trash.svg" alt="trash">
  <table>
    <tr>
      <td class="topic">Exercise</td>
      <td class="topicAtSecound">Sets</td>
      <td class="topicAtSecound">Repetitions</td>
      <td class="topicAtSecound">Weight(LB's)</td>
    </tr>
    <tr class="tr-topic">
      <td class="currentExerciseTopicEdit"><input type="text"></td>
      <td class="currentExerciseSetEdit"><input type="text"></td>
      <td class="currentExerciseRepetitionsEdit"><input type="text"></td>
      <td class="currentExerciseWeightEdit"><input type="text"></td>
    </tr>
  </table>
  <div class="newExercise">
    <p>Add Exercise</p>
  </div>
</div>
<div class="synronTheList">
  <p>Update Workout</p>
</div>
</template>

<script>
import loged from "@/components/successfulLogin";
export default {
  name: "ChangeExerciseComponent",
  components:{
    loged,
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
.ChangeTopicOfExercise{
  width: 420px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  padding: 3px;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
}

.ChangeContentOfExercise_logo{
  width: 120px;
  height: 120px;
  margin-top: -7px;
  margin-left: 140px;
}

.strength{
  width: 90px;
  height: 25px;
  text-align: center;
  background-color: #67ceb7;
  margin-left: 156px;
  margin-top: -5px;
  border-radius: 5px;
  padding: 4px;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
}

.changeExercise input[type="text"]{
  width: 370px;
  height: 30px;
  margin-top: 25px;
  margin-left: 20px;
  border: 1px solid white;
}

.editExercise_pen{
  width: 25px;
  height: 25px;
  background-color: #67ceb7;
  border-radius: 50%;
  margin: 3px;
}

.editExercise_pen img{
  width: 23px;
  height: 23px;
  padding: 4px;
  cursor: pointer;
}

.editExercise_trash{
  width: 25px;
  height: 25px;
  margin-left: 35px;
  margin-top: -28px;
  background-color: #67ceb7;
  border-radius: 50%;
  cursor: pointer;
}

.editExercise_trash img{
  width: 23px;
  height: 23px;
  padding: 4px;
}

.listOfExercise{
  width: 420px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
  padding: 25px;
}

.listOfExercise img{
  width: 15px;
  height: 15px;
  margin-left: -13px;
  cursor: pointer;
}

.topic{
  color: #67ceb7;
  font-size: 13px;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

tr{
  line-height: 5px;
}

.topicAtSecound{
  color: #67ceb7;
  font-size: 13px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  padding-left: 10px;
}

.tr-topic{
  line-height: 50px;
}

.currentExerciseTopicEdit input[type="text"]{
  width: 130px;
  height: 30px;
  margin-left: 1px;
  border: 1px solid white;
}

.currentExerciseSetEdit input[type="text"]{
  width: 50px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid white;
}

.currentExerciseRepetitionsEdit  input[type="text"]{
  width: 71px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid white;
}

.currentExerciseWeightEdit input[type="text"]{
  width: 79px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid white;
}

table{
  margin-left: 5px;
  margin-top: -14px;
}

.newExercise{
  width: 120px;
  height: 25px;
  background-color: #67ceb7;
  color: white;
  text-align: center;
  font-size: 13px;
  font-family: Arial, sans-serif;
  padding: 4px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 8px;
}

.newExercise:hover{
  cursor: pointer;
}

.synronTheList{
  width: 420px;
  height: 35px;
  background-color: #67ceb7;
  color: white;
  text-align: center;
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  padding-top: 9px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

.synronTheList:hover{
  cursor: pointer;
}
</style>