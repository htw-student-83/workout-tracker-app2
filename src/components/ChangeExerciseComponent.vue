<template>
  <div class="nav">
    <div class="logo">
      <img class="imgNavbar" src="../assets/dumbbell.svg" alt="Logo"><p>Active Tracker</p>
    </div>
    <div class="links">
      <div class="buttonHome">Home</div>
      <div class="buttonCreate">Create</div>
      <div class="buttonLogout">Logout</div>
    </div>
  </div>
  <div class="editexercise">
    <div class="manageExercise">
      <img class="editExercise" src="../assets/pencil.svg" alt="pen">
    </div>
    <div class="deleteExercise">
      <img class="delteexercise" src="../assets/trash.svg" alt="trash">
    </div>
    <img class="imgeditExercise" src="../assets/dumbbell.svg" alt="Logo">
    <div class="strength">
      <p>strength</p>
    </div>
    <input type="text" class="changeExercise">
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
export default {
  name: "ChangeExerciseComponent"
}
</script>

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
  margin-left: 35px;
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

.buttonCreate{
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

.editexercise{
  margin-top: 30px;
  padding: 3px;
  width: 420px;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
}

.imgeditExercise{
  width: 100px;
  height: 200px;
  margin-top: -68px;
  margin-left: 161px;
}

.strength{
  width: 80px;
  height: 30px;
  margin-top: -50px;
  margin-left: 170px;
  background-color: #67ceb7;
  border-radius: 7px;
}

.strength p{
  text-align: center;
  padding-top: 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.listOfExercise{
  width: 420px;
  height: 165px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
  padding: 25px;
}
.topic{
  color: #67ceb7;
  font-size: 13px;
  font-weight: bold;
}

tr{
  line-height: 5px;
}

.topicAtSecound{
  color: #67ceb7;
  font-size: 13px;
  font-weight: bold;
  padding-left: 10px;
}

.manageExercise{
  width: 25px;
  height: 25px;
  background-color: #67ceb7;
  border-radius: 50px;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
}

.editExercise{
  width: 14px;
  height: 14px;

}

.editExercise:hover{
  cursor: pointer;
}

.deleteExercise{
  width: 27px;
  height: 27px;
  background-color: #67ceb7;
  border-radius: 50px;
  padding: 5px;
  margin-top: -25px;
  margin-left: 45px;
}

.delteexercise{
  width: 16px;
  height: 16px;
}

.deleteExercise:hover{
  cursor: pointer;
}

.deleteWholeexercise{
  width: 14px;
  height: 14px;
  margin-left: -20px;
}

.deleteWholeexercise:hover{
  cursor: pointer;
}

.tr-topic{
  line-height: 10px;
}

input[type="text"]{
  margin-left: 20px;
  margin-top: 20px;
  width: 370px;
  height: 33px;
  border: 1px solid white;
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
  width: 60px;
  height: 30px;
  margin-left: 10px;
}

.currentExerciseWeightEdit input[type="text"]{
  width: 73px;
  height: 30px;
  margin-left: 10px;
}

table{
  margin-left: -2px;
  margin-top: -14px;
}

.newExercise{
  width: 120px;
  height: 35px;
  background-color: #67ceb7;
  color: white;
  text-align: center;
  font-size: 15px;
  font-family: Arial, sans-serif;
  padding: 10px;
  font-weight: bold;
  margin-top: 10px;
}

.newExercise:hover{
  cursor: pointer;
}

.synronTheList{
  width: 420px;
  height: 41px;
  background-color: #67ceb7;
  color: white;
  text-align: center;
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  padding-top: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.synronTheList:hover{
  cursor: pointer;
}
</style>