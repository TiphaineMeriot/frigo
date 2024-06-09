<template>
  <!-- Formulaire de recherche d'aliments -->
  <v-sheet width="300" class="mx-auto food-search">
    <v-form @submit.prevent="handlerTexte">
      <!-- Champ de texte pour la recherche d'aliments -->
      <v-text-field
        :placeholder="texte.value"
        v-model="texte"
        label="Rechercher un aliment dans le frigo"
      ></v-text-field>
      <!-- Bouton pour soumettre le formulaire -->
      <v-btn type="submit" block class="mt-2">Valider</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

// Émetteur d'événements pour la saisie de texte
const emit = defineEmits(["eventsaisie"])

// Référence réactive pour le texte de recherche
let texte = ref("");

// Gestionnaire d'événements pour la saisie de texte
function handlerTexte() {
  // Log de la valeur du texte
  console.log(texte.value)
  // Émission de l'événement de saisie avec la valeur du texte
  emit('eventsaisie', texte.value)
}
</script>

<style scoped>
/* Styles pour le conteneur de recherche d'aliments */
.food-search {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #FFC0CB; /* Couleur de fond rose */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

/* Styles pour le champ de texte de recherche d'aliments */
.food-search input {
  margin-bottom: 10px;
}

/* Styles pour le bouton de soumission du formulaire */
.food-search button {
  background-color: #FF69B4; /* Couleur de fond rose pour le bouton */
  color: white;
}
</style>
