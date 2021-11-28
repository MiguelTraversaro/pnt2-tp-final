<template>
  <form @submit.prevent="ingresar" class="form-signin text-center container mt-5 border p-5">
    <img class="mb-4" src="@/assets/logo.png" alt="logo" width="80" height="80" />
    <h1 class="h3 mb-3 font-weight-normal">Por favor, ingrese en su cuenta</h1>
    <div class="alert alert-danger mt-1" v-show="!ingreso">Datos incorrectos</div>
    <label for="inputEmail" class="sr-only">Email</label>
    <input
      type="email"
      class="form-control"
      placeholder="Email"
      required
      autofocus=""
      v-model="email"
    />
    <label for="password" class="sr-only">Contraseña</label>
    <input
      type="password"
      class="form-control mt-3"
      placeholder="Contraseña"
      required
      v-model="password"
    />
    <button class="btn btn-lg btn-primary btn-block mt-3 mb-3" type="submit">
      Ingresar
    </button>
    <router-link to="/register" class="text-center mt-4">Ya tengo una cuenta</router-link>
  </form>
</template>

<script>
import axios from "axios"

export default {
  name: "Login",
  data(){
    return{
      email: "",
      password: "",
      url: "http://localhost:3000/api/users/login",
      ingreso: true,
    }
  },
  methods: {
    async ingresar(){
      try {
        const cliente = {
          email: this.email,
          password: this.password,  
        }
        const respuesta = await axios.post(this.url, cliente)
        localStorage.setItem("token",respuesta.data.token)
        localStorage.setItem("usuario_id",respuesta.data.user._id)
        localStorage.setItem("usuario_nombre",respuesta.data.user.nombre)
        localStorage.setItem("usuario_apellido",respuesta.data.user.apellido)
        localStorage.setItem("usuario_admin", respuesta.data.user.esAdmin)
        this.$router.push("/Home");
        console.log(respuesta)
      } catch (error) {
        console.log(error)
        this.ingreso = false
      }
    }
  }
};
</script>

<style scoped>
.text-center {
  text-align: center !important;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40 px;
  padding-bottom: 40 px;
  background-color: #f5f5f5;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
*,
::after,
::before {
  box-sizing: border-box;
}
user agent stylesheet body {
  display: block;
  margin: 8px;
}
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
*,
::after,
::before {
  box-sizing: border-box;
}
*,
::after,
::before {
  box-sizing: border-box;
}
</style>