<template>
  <div class="consultar-container">
    <form class="consultar-form">
      <div class="form-group">
        <label for="id_Est">ID del Estudiante:</label>
        <input id="id_Est" v-model="id" placeholder="Ingrese el ID">
      </div>
      
      <button type="button" @click="consultarPorId" class="btn-consultar">
        Consultar Por ID
      </button>
      <button type="button" @click="borrar" class="btn-borrar">
        Borrar Estudiante
      </button>
      
      <div class="resultado-section" v-if="nombre || apellido || genero || provincia || fechaNac">
        <h3>Información del Estudiante</h3>
        
        <div class="form-group">
          <label for="id_name">Nombre:</label>
          <input id="id_name" type="text" v-model="nombre" readonly>
        </div>
        
        <div class="form-group">
          <label for="id_apellido">Apellido:</label>
          <input id="id_apellido" type="text" v-model="apellido" readonly>
        </div>
        
        <div class="form-group">
          <label for="id_genero">Género:</label>
          <input id="id_genero" type="text" v-model="genero" readonly>
        </div>
        
        <div class="form-group">
          <label for="id_provincia">Provincia:</label>
          <input id="id_provincia" type="text" v-model="provincia" readonly>
        </div>
        
        <div class="form-group">
          <label for="id_fechaNac">Fecha de Nacimiento:</label>
          <input id="id_fechaNac" type="text" v-model="fechaNac" readonly>
        </div>
        
        <div class="form-group">
          <label for="id_Links">Links:</label>
          <textarea id="id_Links" v-model="linksDisplay" readonly rows="3"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { consultarPorIdFacade, borrarFacade } from '../client/matriculaClient.js';

export default {
     data() {
    return {
      apellido: '',
    genero: '',
    id: null,
    links: [
    ],
    nombre: '',
    provincia: '',
    fechaNac: ''
    }
    },
  computed: {
    linksDisplay() {
      if (!this.links || this.links.length === 0) return '';
      return this.links.map(link => `${link.href}: ${link.rel}`).join('\n');
    }
  },
  methods: {
    async consultarPorId() {
      if (!this.id) {
        alert('Por favor ingresa un ID');
        return;
      }
      const resultado = await consultarPorIdFacade(this.id).catch(error => {
          console.error('Error en consultarPorId:', error);
          alert('Error al consultar estudiante');
        });
          console.log('Consultar Todos - Resultado:', resultado);
          this.nombre = resultado.nombre;
          this.apellido = resultado.apellido;
          this.genero = resultado.genero;
          this.provincia = resultado.provincia;
          this.fechaNac = resultado.fechaNac;
          this.links = resultado.links;
    },
    async borrar() {
      try {
        if (!this.id) {
        alert('Por favor ingresa un ID');
        return;
      }
        await borrarFacade(this.id);
        console.log(`Borrar - Estudiante ${this.id} eliminado`);
      } catch (error) {
        console.error('Error en borrar:', error);
      }
    }
}
}
</script>

<style>
.consultar-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.consultar-form {
  background: #022140;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 1px;
  font-weight: 600;
  color: #dce6f0;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-group input[readonly] {
  background-color: #f1f3f4;
  border-color: #d1d5db;
  cursor: not-allowed;
}

.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
}

.form-group textarea[readonly] {
  background-color: #f1f3f4;
  border-color: #d1d5db;
  cursor: not-allowed;
}

.btn-consultar {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 2rem;
}

.btn-consultar:hover {
  background-color: #0056b3;
}
.btn-borrar {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #dd2323;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 2rem;
}

.btn-borrar:hover {
  background-color: #981111;
}

.resultado-section h3 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
  text-align: center;
  font-size: 1.25rem;
}

</style>