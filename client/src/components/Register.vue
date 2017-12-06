<template>
  <div id="container">
    <h1 class="title">Register</h1>
    <form @submit.prevent="register">
      <input type="text"v-model="formRegister.name" placeholder="Name" required>
      <input type="text"v-model="formRegister.username" placeholder="Username" required>
      <input type="email"v-model="formRegister.email" placeholder="E-mail" required>
      <input type="password" v-model="formRegister.password" placeholder="Password" required>
      <button class="button is-dark">Sign Up</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      formRegister: {
        username: '',
        password: '',
        email: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'saveUser'
    ]),
    register () {
      this.saveUser({
        ...this.formRegister
      })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Poiret+One');
* {
  margin: 0;
  font-family: 'Montserrat';
}
/* Login container */
#container{
  position: absolute;
  top: 500px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 260px;
  height: 300px;
  border-radius: 5px;
  background: rgba(3,3,3,0.25);
  box-shadow: 1px 1px 50px #000;
}

/* Inputs */
button,
input{
  text-decoration: none;
  position: relative;
  width: 80%;
  display: block;
  margin: 9px auto;
  font-size: 17px;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: rgba(3,3,3,.1);
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

input:focus{
  outline: none;
  box-shadow: 3px 3px 10px #333;
  background: rgba(3,3,3,.18);
}

/* Placeholders */
::-webkit-input-placeholder {
   color: #ddd;  }
:-moz-placeholder { /* Firefox 18- */
   color: red;  }
::-moz-placeholder {  /* Firefox 19+ */
   color: red;  }
:-ms-input-placeholder {  
   color: #333;  }

/* Link */
button {
  font-family: 'Open Sans Condensed', sans-serif;
  text-align: center;
  padding: 4px 8px;
  background: rgba(107,255,3,0.3);
}

button:hover{
  opacity: 0.7;
}

</style>
