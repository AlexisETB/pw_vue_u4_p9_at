<template>
  <div class="consultar-por-id">
    <h2>Consultar Estudiante por ID</h2>
    <div class="busqueda">
      <label for="id_busqueda">ID del Estudiante:</label>
      <input id="id_busqueda" type="number" v-model="idBusqueda" placeholder="Ingresa el ID">
      <button @click="consultarPorId" :disabled="!idBusqueda">Consultar</button>
    </div>
    
    <div v-if="estudiante" class="estudiante-info">
      <h3>Información del Estudiante</h3>
      <form>
        <div class="campo">
          <label for="id_Est">ID:</label>
          <input id="id_Est" type="text" v-model="estudiante.id" readonly>
        </div>
        <div class="campo">
          <label for="id_name">Nombre:</label>
          <input id="id_name" type="text" v-model="estudiante.nombre" readonly>
        </div>
        <div class="campo">
          <label for="id_apellido">Apellido:</label>
          <input id="id_apellido" type="text" v-model="estudiante.apellido" readonly>
        </div>
        <div class="campo">
          <label for="id_genero">Género:</label>
          <input id="id_genero" type="text" v-model="estudiante.genero" readonly>
        </div>
        <div class="campo">
          <label for="id_provincia">Provincia:</label>
          <input id="id_provincia" type="text" v-model="estudiante.provincia" readonly>
        </div>
      </form>
    </div>
    
    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFacade } from '../client/matriculaClient.js';

export default {
  data() {
    return {
      idBusqueda: '',
      estudiante: null,
      error: null
    }
  },
  methods: {
    consultarPorId() {
      if (!this.idBusqueda) {
        this.error = 'Por favor ingresa un ID válido';
        return;
      }
      
      this.error = null;
      this.estudiante = null;
      
      consultarPorIdFacade(this.idBusqueda)
        .then(resultado => {
          console.log(`Consultar Por Id ${this.idBusqueda} - Resultado:`, resultado);
          this.estudiante = resultado;
        })
        .catch(error => {
          console.error('Error en consultarPorId:', error);
          this.error = `Error al consultar el estudiante con ID ${this.idBusqueda}. Verifica que el ID existe.`;
        });
    }
  }
}
</script>

<style scoped>
.consultar-por-id {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.busqueda {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.busqueda label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.busqueda input {
  width: 200px;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.busqueda button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.busqueda button:hover {
  background-color: #0056b3;
}

.busqueda button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.estudiante-info {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  background-color: #f8f9fa;
}

.campo {
  margin-bottom: 15px;
}

.campo label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.campo input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f5f5f5;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-top: 10px;
}

h2, h3 {
  color: #333;
}
</style>