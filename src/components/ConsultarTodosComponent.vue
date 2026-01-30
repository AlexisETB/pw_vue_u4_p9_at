<template>
  <div class="consultar-container">
    <button @click="consultarTodos" class="btn-consultar">Consultar Todos</button>
    <div class="Estudiantes">
      <div class="lista">
          <table>
          <thead>
              <tr >
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de nacimento</th>
                  <th>Provincia</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="Estudiante in arreglo" :key="Estudiante.nombre">
                  <td>{{ Estudiante.id }}</td>
                  <td>{{ Estudiante.nombre }}</td>
                  <td>{{ Estudiante.apellido }}</td>
                  <td>{{ Estudiante.fechaNac }}</td>
                  <td>{{ Estudiante.provincia }}</td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarTodosFacade } from '../client/matriculaClient.js';
export default {
  data(){
    return {
         arreglo : []
    }
  },
  methods: {
    async consultarTodos() {
      const resultado = await consultarTodosFacade().catch(error => {
          console.error('Error en consultarTodos:', error);
          alert('Error al consultar estudiantes');
        });
        console.log('Consultar Todos - Resultado:', resultado);
          this.arreglo = resultado;
    }
  }
}
</script>

<style>
.consultar-container {
    padding: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

th, td{
    border: solid 1px rgb(4, 65, 150);
    height: 30px;
    width: 50px;
    background:  #022140;
    text-align: center;
    padding: 8px;
}

th{
    color: rgb(214, 214, 241);
}

td{
    color: rgb(180, 198, 225);
}

.btn-consultar {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
}

.btn-consultar:hover {
    background-color: #0056b3;
}
</style>