<template>
  <navbar/>
  <div v-if="errorMsg" class="error">
    <p>{{errorMsg}}</p>
  </div>
  <div class="loginbox">
      <label class="TextLogin">Login</label><br>
      <div class="inputeMail">
        <label class="senddata">Email</label><br>
        <input type="email"><br>
      </div>
      <div class="inputPasswort">
        <label class="senddata">Password</label><br>
        <input type="password"><br>
      </div>
      <div class="login">Login</div>
      <div class="haveanaccount">
        <p>Don't have an account?</p>
        <div class="newRegistration">
          <router-link to="/Registrationbox">Register</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import { ref } from "vue";

export default {
  name: "LoginComponent",
  components:{
    navbar,
  },
  setup(){
    //create data/ vars
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    //Register function
    return{email, password, errorMsg};
  },
}
</script>

<style scoped>
.loginbox{
  width: 390px;
  height: 250px;
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

.login{
  width: 70px;
  height: 30px;
  background-color: #67ceb7;
  text-align: center;
  margin-top: 20px;
  padding-top: 5px;
  color: white;
  font-family: Arial, sans-serif;
}

.login:hover{
  cursor: pointer;
}

.haveanaccount{
  text-align: center;
  margin-top: 10px;
  margin-left: -50px;
  font-size: 14px;
}

.newRegistration{
  margin-top: -17px;
  margin-left: 185px;
}

.haveanaccount a{
  color: #67ceb7;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  font-family: Arial, sans-serif;

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