<template>
  <div>
    <button @click="consultarTodos">Consultar Todos</button>
    <button @click="consultarPorId">Consultar Por Id</button>
    <button @click="guardar">Guardar</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="actualizarParcial">Actualizar Parcial</button>
    <button @click="borrar">Borrar</button>
  </div>
</template>

<script>
import { 
  consultarTodosFacade, 
  consultarPorIdFacade, 
  guardarFacade, 
  actualizarFacade, 
  actualizarParcialFacade, 
  borrarFacade 
} from '../client/matriculaClient.js';

export default {
  methods: {
    async consultarTodos() {
      try {
        const resultado = await consultarTodosFacade();
        console.log('Consultar Todos - Resultado:', resultado);
      } catch (error) {
        console.error('Error en consultarTodos:', error);
      }
    },
    
    async consultarPorId() {
      try {
        const id = 2; // ID de ejemplo
        const resultado = await consultarPorIdFacade(id);
        console.log(`Consultar Por Id ${id} - Resultado:`, resultado);
      } catch (error) {
        console.error('Error en consultarPorId:', error);
      }
    },
    
    async guardar() {
      try {
        const estudianteEjemplo = {
          nombre: 'Furina',
          apellido: 'D Fontaine',
          genero: 'Femenino',
          provincia: 'Liyue'   
        };
        const resultado = await guardarFacade(estudianteEjemplo);
        console.log('Guardar - Estudiante guardado:', resultado);
      } catch (error) {
        console.error('Error en guardar:', error);
      }
    },
    
    async actualizar() {
      try {
        const id = 41; // ID de ejemplo
        const estudianteActualizado = {
          nombre: 'Furina',
          apellido: 'Di Fontaine',
          genero: 'Femenino',
          provincia: 'Fontaine' 
        };
        const resultado = await actualizarFacade(id, estudianteActualizado);
        console.log(`Actualizar - Estudiante ${id} actualizado:`, resultado);
      } catch (error) {
        console.error('Error en actualizar:', error);
      }
    },
    
    async actualizarParcial() {
      try {
        const id = 41; // ID de ejemplo
        const datosActualizacion = {
          apellido: 'Di Fontaine -Moonlight',
          provincia: 'Fontaine City'
        };
        const resultado = await actualizarParcialFacade(id, datosActualizacion);
        console.log(`Actualizar Parcial - Estudiante ${id} actualizado parcialmente:`, resultado);
      } catch (error) {
        console.error('Error en actualizarParcial:', error);
      }
    },
    
    async borrar() {
      try {
        const id = 42; // ID de ejemplo
        await borrarFacade(id);
        console.log(`Borrar - Estudiante ${id} eliminado`);
      } catch (error) {
        console.error('Error en borrar:', error);
      }
    }
  }
}
</script>

<style>

</style>