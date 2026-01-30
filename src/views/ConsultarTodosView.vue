<template>
  <div class="consultar-todos">
    <h1>Consultar Estudiantes</h1>
    <ConsultarTodos/>
  </div>
</template>

<script>
import ConsultarTodos from '../components/ConsultarTodosComponent.vue';

export default {
  components: {
    ConsultarTodos
  }
}

</script>

<style>
.consultar-todos {
  padding: 2rem;
}

.consultar-todos h1 {
  margin-bottom: 2rem;
  color: #dbe1e8;
}
</style>