<template>
  <div class="login">
    <h2>LOGIN</h2>
    <form action="">
        <div>
            <label for="username">Usuario:</label>
            <input type="text" id="username" placeholder="Usuario" v-model="usuario">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" placeholder="Contraseña" v-model="password">
        </div>
        <div>
            <button @click="login" type="button">Login</button>
        </div>
    </form>
    <p>{{ message }}</p>   
  </div>
</template>

<script>
import { obtenerTokenFacade } from '../client/authClient';

export default {
    data(){
        return {
            usuario: '',
            password:'',
            message: ''
        };
    },
    methods:{
        async login(){
            try {
                const token = await obtenerTokenFacade({ user: this.usuario, password: this.password });
                if (token && token.accessToken) {
                    localStorage.setItem("token", token.accessToken);
                    localStorage.setItem("estaAutenticado", true);
                    console.log("Login exitoso");
                    this.message = "Login exitoso";
                } else {
                    console.error("Error al obtener el token");
                    this.message = "Usuario o contraseña incorrectos";
                }
            } catch (error) {
                console.error("Error en el login:", error);
                this.message = "Ocurrió un error al intentar iniciar sesión";
            }
        }
    }

}
</script>

<style>
.login{
    width: 300px;
    margin: 100px;
    padding: 20px;
    border: 1px solid rgb(93, 154, 1);
    border-radius: 8px;
    text-align: center;
}
input{
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}
label{
    display: block;
    text-align: left;
    margin-bottom: 5px;
}
button{
    width: 100%;
    padding: 8px;
    cursor: pointer;
    background: rgb(17, 238, 17);
}
button:hover{
    background: rgb(5, 77, 5);
}
p{
    color: rgb(233, 233, 233);
    margin-top: 10px;
    font-weight: bold;
}
</style>