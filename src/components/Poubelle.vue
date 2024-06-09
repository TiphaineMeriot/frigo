<template>
  <!-- Conteneur de la poubelle avec gestionnaire d'événements pour le dragover -->
  <div class="poubelle" @dragover.prevent>
  </div>
</template>

<script>
export default {
  // Nom du composant
  name: 'Poubelle'
};
</script>

<style scoped>
/* Styles pour la poubelle */
.poubelle {
  position: fixed; /* Position fixe pour que la poubelle reste en bas à droite */
  bottom: 0;
  right: 0;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image:url("https://www.ad-pro.fr/1994-large_default/petite-poubelle-a-pedale-inox-20-litres.jpg");
}
</style>
