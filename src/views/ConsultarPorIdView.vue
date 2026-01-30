<template>
  <div class="consultar-por-id">
    <h1>Consultar Estudiante por ID</h1>
    <ConsultarPorId />
  </div>
</template>

<script>
import ConsultarPorId from '../components/ConsultarPorIdComponent.vue';

export default {
  components: {
    ConsultarPorId
  }
};
</script>

<style>
.consultar-por-id {
  padding: 2rem;
}

.consultar-por-id h1 {
  margin-bottom: 2rem;
  color: #dbe1e8;
}
</style>