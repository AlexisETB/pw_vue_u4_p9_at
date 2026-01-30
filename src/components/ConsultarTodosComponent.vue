<template>
  <button @click="consultarTodos">Consultar Todos</button>
  <div class="Estudiante">
    
  </div>
</template>

<script>
import { consultarTodosFacade } from '../client/matriculaClient.js';
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
    async consultarTodos() {
      try {
        const resultado = await consultarTodosFacade();
        console.log('Consultar Todos - Resultado:', resultado);
      } catch (error) {
        console.error('Error en consultarTodos:', error);
      }
    }
  }
}
</script>

<style>

</style>