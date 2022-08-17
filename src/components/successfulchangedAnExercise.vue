<template>
  <loged/>
  <div class="changedList">
    <p>Success: Workout Updated!</p>
  </div>
  <editAExerciseView/>
  <div class="placetoButton"></div>
</template>


<script>
import loged from "@/components/successfulLogin";
import editAExerciseView from "@/components/EditExerciseComponent";

export default {
  name: "successfulchangedAnExercise",
  components:{
    loged,
    editAExerciseView,
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
.changedList{
  width: 370px;
  height: 40px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background-color: #efefef;
  padding: 10px;
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.placetoButton{
  margin-bottom: 30px;
}
</style>