<template>
  <!-- Conteneur principal -->
  <div class="container">
    <!-- Section du frigo -->
    <div class="food-frigo">
      <!-- Composant FoodFrigo -->
      <FoodFrigo></FoodFrigo>
    </div>
  </div>
</template>

<script>
// Importation du composant FoodFrigo
import FoodFrigo from "@/App.vue";

export default {
  name: "PageFrigo",
  // Déclaration des composants utilisés
  components: {FoodFrigo}
}
</script>

<style scoped>
/* Styles pour le conteneur principal */
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

/* Styles pour la section du frigo */
.food-frigo {
  width: 600px;
  height: 700px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
