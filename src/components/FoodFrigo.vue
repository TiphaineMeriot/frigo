<template>

    <FoodSearch @eventsaisie="handlerTexte"></FoodSearch>


    <FoodAffichList :pcritere="motcle"></FoodAffichList>

</template>

<script setup>
import { ref } from "vue"
import FoodSearch from "@/components/FoodSearch.vue";
import FoodAffichList from "@/components/FoodAffichList.vue";
// Mot clé pour la recherche
let motcle = ref("")
// Gestionnaire d'événements pour la saisie de texte
function handlerTexte(texte) {
  motcle.value = texte
}
</script>

<style scoped>
FoodSearch {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white; /* Adjust this color to match your design */
  z-index: 1000; /* Ensure it is above other content */
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: adds a shadow for better visibility */
}
</style>
