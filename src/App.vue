<script setup>
import { ref } from 'vue'
const drawer = ref(false) // booléen pour afficher/cacher la zone de gauche
</script>
<template>
  <v-app>
    <v-navigation-drawer
      color="pink"
      density="compact"
    >
      <v-app-bar-title>Le frigo de Tiphaine</v-app-bar-title>
        <v-list>
          <v-list-item to="/">  <!-- navigation vers la page "films" -->
            <v-list-item-title >Cuisine</v-list-item-title>
          </v-list-item>
          <v-list-item to="/PageSupermarche">  <!-- navigation vers la page "films" -->
            <v-list-item-title >Supermarché</v-list-item-title>
          </v-list-item>
          <v-list-item to="/PageFrigo"> <!-- navigation vers la page "acteurs" -->
            <v-list-item-title>Mon frigo</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView />
      </v-container>

    </v-main>
  </v-app>
</template>

<style>
  main{
    background-color: white;
    color: black;
  }
</style>
