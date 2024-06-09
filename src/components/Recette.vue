Pour ajouter des commentaires à votre code, vous pouvez utiliser `<!-- -->` pour les commentaires dans le template et `//` ou `/* */` pour les commentaires dans le script et le style. Voici comment vous pouvez le faire :

```vue
<template>
  <!-- Conteneur principal -->
  <div>
    <!-- Livre de recettes avec gestionnaire d'événements pour l'ouverture -->
    <div class="recipe-book" @click="openBook">
      <!-- Image du livre de recettes -->
      <img src="https://img.freepik.com/vecteurs-premium/vieux-livre-ferme-couverture-marron_135176-81.jpg">
    </div>

    <!-- Liste des recettes préférées, affichée seulement si showRecipes est vrai -->
    <div class="favorite-recipes" v-if="showRecipes">
      <h1>Mes recettes préférées</h1>
      <!-- Boucle sur chaque recette pour l'afficher -->
      <ul>
        <li v-for="(recipe, index) in recipes" :key="index">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variable réactive pour contrôler l'affichage des recettes
const showRecipes = ref(false);

// Fonction pour ouvrir le livre de recettes
const openBook = () => {
  showRecipes.value = true;
};

// Liste des recettes
const recipes = [
  {
    name: 'Fraises à la chantilly',
    description: 'Une délicieuse recette de fraises fraîches servies avec de la chantilly maison.',
    ingredients: ['fraises', 'chantilly']
  },
  {
    name: 'Spritz',
    description: 'Un cocktail rafraîchissant à base de Prosecco, d’eau gazeuse et d’Aperol.',
    ingredients: ['Prosecco', 'eau gazeuse', 'Aperol']
  },
  {
    name: 'Tomates burrata',
    description: 'Une salade simple et savoureuse de tomates fraîches et de burrata crémeuse.',
    ingredients: ['tomates', 'burrata']
  }
];
</script>

<style scoped>
/* Styles pour le livre de recettes */
.recipe-book {
  top:0;
  padding:50px;
  right:0;
  position: fixed;
}

/* Styles pour les titres */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin: 10px 0;
}

/* Styles pour les images */
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
