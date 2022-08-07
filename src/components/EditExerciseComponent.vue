<template>
  <loged/>
  <div class="editexercise">
    <div class="manageExercise">
      <img class="editExercise" src="../assets/pencil.svg" alt="pen">
    </div>
    <div class="deleteExercise">
      <img class="deleteexercise" src="../assets/trash.svg" alt="trash">
    </div>
    <img class="imgeditExercise" src="../assets/dumbbell.svg" alt="Logo">
    <div class="strength">
      <p>strength</p>
    </div>
    <p class="editexerciseOne">Exercise #1</p>
  </div>
  <div class="listOfExercise">
    <table>
      <tr>
        <td class="topic">Exercise</td>
        <td class="topic">Sets</td>
        <td class="topic">Repetitions</td>
        <td class="topic">Weight(LB's)</td>
      </tr>
      <tr>
        <td class="currentExercise">Chest Press</td>
        <td class="currentExercise">5</td>
        <td class="currentExercise">10-12</td>
        <td class="currentExercise">145</td>
      </tr>
      <tr>
        <td class="topic">Exercise</td>
        <td class="topic">Sets</td>
        <td class="topic">Repetitions</td>
        <td class="topic">Weight(LB's)</td>
      </tr>
      <tr>
        <td class="currentExercise">Bock Rows</td>
        <td class="currentExercise">5</td>
        <td class="currentExercise">10-12</td>
        <td class="currentExercise">145</td>
      </tr>
    </table>
  </div>
</template>

<script>
import loged from "@/components/successfulLogin"
export default {
  name: "EditExerciseComponent",
  components:{
    loged,
  }
}
</script>

<style scoped>

.editexercise{
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 3px;
  width: 370px;
  height: 220px;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
}

.imgeditExercise{
  width: 100px;
  height: 200px;
  margin-top: -68px;
  margin-left: 131px;
}

.strength{
  width: 80px;
  height: 30px;
  margin-top: -50px;
  margin-left: 141px;
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

.editexerciseOne{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 30px;
}

.listOfExercise{
  width: 370px;
  height: 135px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: #efefef;
  box-shadow: 0 4px 4px #e3e1e1;
  padding: 20px;
}
.topic{
  color: #67ceb7;
  padding-right: 38px;
  font-size: 13px;
  font-weight: bold;
}

tr{
  line-height: 22px;
}

.currentExercise{
  color: black;
  font-size: 13px;
  font-family: Arial, sans-serif;
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
  width: 26px;
  height: 26px;
  background-color: #67ceb7;
  border-radius: 50px;
  padding: 5px;
  margin-top: -25px;
  margin-left: 45px;
}

.deleteExercise:hover{
  cursor: pointer;
}

.deleteexercise{
  width: 14px;
  height: 14px;
}
</style>