<template>
   <div class="actualizar-container">
    <form class="actualizar-form">
        <div class="form-group">
        <label for="id_Est">ID del Estudiante:</label>
        <input id="id_Est" v-model="id" placeholder="Ingrese el ID">
      </div>
      <button type="button" @click="actualizar" class="btn-actualizar">
        Actualizar Estudiante
      </button>
      <div class="resultado-section">
        <h3>Información del Estudiante</h3>
        
        <div class="form-group">
          <label for="id_name">Nombre:</label>
          <input id="id_name" type="text" v-model="nombre">
        </div>
        
        <div class="form-group">
          <label for="id_apellido">Apellido:</label>
          <input id="id_apellido" type="text" v-model="apellido">
        </div>
        
        <div class="form-group">
          <label for="id_genero">Género:</label>
          <input id="id_genero" type="text" v-model="genero">
        </div>
        
        <div class="form-group">
          <label for="id_provincia">Provincia:</label>
          <input id="id_provincia" type="text" v-model="provincia">
        </div>
        
        <div class="form-group">
          <label for="id_fechaNac">Fecha de Nacimiento:</label>
          <input id="id_fechaNac" type="text" v-model="fechaNac">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { actualizarFacade, inicializarAuth } from '../client/matriculaClient.js';
export default {
    data() {
        return {
            id: null,
            nombre: '',
            apellido: '',
            genero: '',
            provincia: '',
            fechaNac: '',
        }
    },
     async mounted() {
    // Inicializa el token cuando el componente se monta
    console.log('Componente Actualizar montado - Inicializando token...');
    await inicializarAuth();
    console.log('Token inicializado correctamente');
  },
    methods: {
    async actualizar() {
      try {
        const estudianteActualizado = {
          nombre: this.nombre,
          apellido: this.apellido,
          genero: this.genero,
          provincia: this.provincia,
          fechaNac: this.fechaNac
        };
        const resultado = await actualizarFacade(this.id, estudianteActualizado);
        console.log(`Actualizar - Estudiante ${this.id} actualizado:`, resultado);
      } catch (error) {
        console.error('Error en actualizar:', error);
      }
    },
    }
}
</script>

<style> 
.actualizar-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.actualizar-form {
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

.btn-actualizar {
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

.btn-actualizar:hover {
  background-color: #0056b3;
}

.resultado-section h3 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
  text-align: center;
  font-size: 1.25rem;
}

</style>