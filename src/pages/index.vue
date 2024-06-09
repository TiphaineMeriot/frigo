<template>
  <!-- Composant du livre de recettes -->
  <div class="recipe-book"><Recette></Recette></div>

  <!-- Composant du frigo avec gestionnaire d'événements pour le clic -->
  <div class="fridge" @click="handleClick">
  </div>

  <!-- Composant de la poubelle -->
  <Poubelle></Poubelle>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Poubelle from "@/components/Poubelle.vue";

// Utilisation du routeur Vue
const router = useRouter();

// Fonction pour gérer le clic sur le frigo
const handleClick = () => {
  // Redirection vers la page du frigo
  router.push('/Pagefrigo');
};
</script>

<style scoped>
/* Styles pour le frigo */
.fridge {
  margin-top:50px;
  display: grid;
  grid-template-rows: repeat(3, 1fr); /* Crée trois lignes */
  grid-gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  height:560px;
  width:300px;
  background-size:cover;
  background-image:url("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKdDVFRkV0O8j2iYvMy3cOMEZYjs8COOIvxArc4f753g-X9_F1zM0FENFhWX5BhKQcWKJxp17xGmqt-T1CbS1EqowXrqN7hsQCg8VEfhwztA9r&usqp=CAc");
}
</style>
