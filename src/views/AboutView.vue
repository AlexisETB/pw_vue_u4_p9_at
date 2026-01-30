<template>
  <div class="about">
    <AboutComponent />
  </div>
</template>
<script>
import AboutComponent from '../components/AboutComponent.vue';
export default {
  components: {
    AboutComponent
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
