<template>
  <navbar/>
  <div v-if="errorMsg" class="error">
    <p>{{errorMsg}}</p>
  </div>
  <div class="Registrationbox">
    <label class="TextLogin">Register</label><br>
    <div class="inputeMail">
      <label class="senddata">Email</label><br>
      <input type="email" required id="email" v-model="email"><br>
    </div>
    <div class="inputPasswort">
      <label class="senddata">Password</label><br>
      <input type="password" required id="password" v-model="password"><br>
    </div>
    <div class="againinputPasswort">
      <label class="senddata">Confirm Password</label><br>
      <input type="password" required id="passwordagain" v-model="confirmpassword"><br>
    </div>
    <div class="register">Register</div>
    <p class="haveanaccount">Already have an account?
      <router-link to="/loginbox">Login</router-link></p>
  </div>
</template>

<script>

import navbar from "@/components/Navbar";
import { ref } from 'vue';

export default {
  name: "RegistrationComponent",
  components:{
    navbar,
  },

  setup(){
    //create data/ vars
    const email = ref(null);
    const password = ref(null);
    const confirmpassword = ref(null);
    const errorMsg = ref(null);

    //Register function
    return{email, password, confirmpassword, errorMsg};
  },
};
</script>

<style scoped>
.Registrationbox{
  width: 390px;
  height: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: #efefef;
  padding: 15px;
  box-shadow: 0 4px 4px #e3e1e1;
}

.TextLogin{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 25px;
}

.inputeMail{
  margin-top: 10px;
}

.inputPasswort{
  margin-top: 10px;
}

input[type="email"]{
  width: 360px;
  height: 25px;
  border: 1px solid white;
}

input[type="password"]{
  width: 360px;
  height: 25px;
  border: 1px solid white;
}

.senddata{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 12px;
}
.againinputPasswort{
  margin-top: 10px;
}

.register{
  width: 70px;
  height: 30px;
  background-color: #67ceb7;
  text-align: center;
  margin-top: 20px;
  padding-top: 8px;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 11px;
  font-weight: bold;
}

.register:hover{
  cursor: pointer;
}

.haveanaccount{
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.haveanaccount a{
  color: #67ceb7;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 12px;
}

span{
  color: #67ceb7;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 12px;
}

span:hover{
  cursor: pointer;
}
</style>