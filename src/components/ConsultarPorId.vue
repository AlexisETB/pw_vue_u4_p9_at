<template>
  <button @click="consultarPorId">Consultar Por Id</button>
  <div class="Estudiante">
    <form action="">
                <label for="id_Est">Id::</label>
                <input id="id_Est" type="text" v-model="id">
                <label for="id_name">Nombre:</label>
                <input id="id_name" type="text" v-model="nombre">
                <label for="id_apellido">Apellido:</label>
                <input id="id_apellido" type="text" v-model="apellido">
                <label for="id_genero">Genero:</label>
                <input id="id_genero" type="text" v-model="genero">
                <label for="id_provincia">Provincia:</label>
                <input id="id_provincia" type="text" v-model="provincia">
                
            </form>
  </div>
</template>

<script>
import { consultarPorIdFacade } from '../client/matriculaClient.js';

export default {
     data() {
    return {
      apellido: '',
    genero: '',
    id: null,
    links: [
        
    ],
    nombre: '',
    provincia: ''
    }
    },
    methods: {
      
    async consultarPorId() {
      try {
        const id = 2; // ID de ejemplo
        const resultado = await consultarPorIdFacade(id);
        console.log(`Consultar Por Id ${id} - Resultado:`, resultado);
      } catch (error) {
        console.error('Error en consultarPorId:', error);
      }
      this.id = resultado.id;
      this.nombre = resultado.nombre;   
        this.apellido = resultado.apellido;
        this.genero = resultado.genero;
        this.provincia = resultado.provincia;
    },
}
}
</script>

<style>

</style>