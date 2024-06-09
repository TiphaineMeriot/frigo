<template>
  <!-- Conteneur principal pour les aliments -->
  <div class="fridge">
    <!-- Grille pour afficher les aliments -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <span class="headline">Le frigo de Tiphaine</span>
          </v-card-title>
          <v-list>
            <!-- Boucle sur chaque étagère du frigo -->
            <v-list-item v-for="(shelf, index) in shelves" :key="index">
              <v-row>
                <!-- Boucle sur chaque aliment de l'étagère -->
                <v-col v-for="food in shelf" :key="food.id" cols="3">
                  <!-- Bouton pour chaque aliment, avec gestion des événements de drag and drop et de clic -->
                  <button
                    draggable="true"
                    @dragstart="dragStart($event, food.id)"
                    @dragend="dragEnd"
                    @click="getInfoFood(food.id)"
                    class="food"
                  >
                    <!-- Image et quantité de l'aliment -->
                    <img :src="food.picture" :alt="food.name" />
                    {{ food.quantity }}

                  </button>
                  <!-- Bouton pour mettre à jour l'aliment -->
                  <button @click="updateFood(food.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                      />
                    </svg>
                  </button>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <!-- Composant Poubelle pour jeter les aliments -->
    <Poubelle @drop="drop($event)" />
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from 'vue';
import Food from '@/Food';

const props = defineProps(['pcritere']);
const url = 'https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/9/produits';
const listFood = reactive([]);

// Fonction pour afficher les aliments dans le frigo
function displayFood() {
  fetch(`${url}?search=${props.pcritere}`, { method: 'GET' })
    .then((response) => response.json())
    .then((dataJSON) => {
      listFood.splice(0, listFood.length);
      for (let f of dataJSON) {
        listFood.push(new Food(f));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
// Calcul des étagères du frigo
const shelves = computed(() => {
  const rows = 5;// Nombre de lignes fixé à 10
  const cols = 3; // Nombre de colonnes
  const shelfSize = rows * cols;
  const shelves = [];
  for (let i = 0; i < shelfSize; i += cols) {
    shelves.push(listFood.slice(i, i + cols));
  }
  return shelves;
});
// Fonction pour supprimer un aliment du frigo
function deleteFood(id) {
  if (window.confirm('Voulez-vous vraiment jeter ce produit ?')) {
    fetch(`${url}/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((dataJSON) => {
        window.alert('Attention, vous avez jeté tous les produits ! : ');
        console.log(dataJSON);
        displayFood();
      })
      .catch((error) => console.log(error));
  }
}
// Fonction pour obtenir des informations sur un aliment
function getInfoFood(id) {
  fetch(`${url}/${id}`, { method: 'GET' })
    .then((response) => response.json())
    .then((dataJSON) => {
      window.alert(`Produit : ${dataJSON.nom}\nQuantité : ${dataJSON.qte}`);
    })
    .catch((error) => console.log(error));
}
// Fonction pour mettre à jour un aliment
function updateFood(id) {
  fetch(`${url}/${id}`, { method: 'GET' })
    .then((response) => response.json())
    .then((dataJSON) => {
      let n = dataJSON.nom;
      let q = dataJSON.qte;
      let photo = dataJSON.photo;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
          id: id,
          nom: n,
          qte: q - 1,
          photo: photo,
        }),
      })
        .then((response) => response.json())
        .then((dataJSON) => {
          if (q == 1) {
            deleteFood(id);
            return;
          } else {
            console.log(dataJSON);
            displayFood();
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}
// Fonction pour gérer le début du drag and drop
function dragStart(event, id) {
  event.dataTransfer.setData('text/plain', id);
}
// Fonction pour gérer la fin du drag and drop
function dragEnd(event) {
  event.target.style.opacity = '1';
}
// Fonction pour gérer le drop d'un aliment
function drop(event) {
  const id = event.dataTransfer.getData('text/plain');
  deleteFood(id);
}
// Appel de displayFood lors du montage du composant
onMounted(() => {
  displayFood();
});
// Surveillance de la prop pcritere pour rafraîchir les aliments
watch(
  () => props.pcritere,
  (newcritere) => {
    console.log(newcritere);
    displayFood();
  }
);
</script>

<style scoped>
/* Styles pour le conteneur principal des aliments */
.fridge {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Styles pour chaque bouton d'aliment */
.food {
  width: 100%;
  padding: 5px;
  text-align: center;
  border: none;
  background-color: transparent;
}

/* Styles pour l'image de chaque aliment */
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
