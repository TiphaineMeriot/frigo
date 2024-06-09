<script setup>
import {reactive} from "vue";
import Food from "@/Food";
// Liste des aliments disponibles
const aliments = [
  ["Jambon Blanc", "1", "https://boucherie-graillot-shop.fr/160-large_default/jambon-de-york-maison-label-rouge.jpg"],
  ["Œufs Fermiers", "1", "https://www.framboizeinthekitchen.com/wp-content/uploads/2018/04/oeufs.jpg"],
  ["Poivrons Grillés", "1", "https://resize.prod.docfr.doc-media.fr/rcrop/1200,678,center-middle/ext/eac4ff34/content/2023/6/4/shutterstock-270503105.jpg"],
  ["Taboulé Frais", "1", "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/ddc34a7c-349f-4066-86c2-977252be1ac1_sHsr58N.jpg"],
  ["Houmous Nature", "1", "https://img.cuisineaz.com/660x660/2017/06/20/i128397-.jpeg"],
  ["Charcuterie Italienne", "1", "https://iod.keplrstatic.com/api/ar_1,c_crop,g_north/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/H414_PLATEAU_DE_SAVOIE_220G_V3.jpg"],
  ["Fromage Brie", "1", "https://www.paysanbreton.com/sites/default/files/product/2021-12/Brie%20Label%20Rouge%20POINTE%20BD%20site%20web.png"],
  ["Gaspacho Andalou", "1", "https://images.ricardocuisine.com/services/recipes/gaspacho1.jpg"],
  ["Salade de Fruits Frais", "1", "https://img.cuisineaz.com/660x660/2013/12/20/i26162-salade-de-fruits-d-ete-facile.jpg"],
  ["Tzatziki", "1", "https://files.meilleurduchef.com/mdc/photo/recette/tzatziki/tzatziki-1200.jpg"],
  ["Crevettes Cuites", "1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszId8fpK7_9q2xuQ3AGnNV2ujYxvxsThLRQ&s"],
  ["Asperges Vertes", "1", "https://cache.marieclaire.fr/data/photo/w1000_ci/5e/asperges-bienfaits.jpg"],
  ["Ricotta Fraîche", "1", "https://www.ilristorante.fr/wp-content/uploads/2022/08/ricotta-sur-feuille.jpeg"],
  ["Mousse au Chocolat", "1", "https://img.cuisineaz.com/660x660/2022/07/29/i184912-shutterstock-1033452436-min.jpeg"],
  ["Bâtonnets de Carotte", "1", "https://www.primeale.fr/app/uploads/2022/03/primeale-les-carottes-vrac.jpg"],
  ["Brochettes de Poulet", "1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5nEEVycuUhtfO4x5MC8to0vH0BVGHKuANg&s"],
  ["Fromage Bleu d'Auvergne", "1", "https://agour.com/1253-large_default/bleu-de-chevre-du-pays-basque-urdina.jpg"],
  ["Dessert au Caramel", "1", "https://media.carrefour.fr/medias/28ca99c36eb73ea6b2b520a3d2972922/p_540x540/3270190024439-photosite-20210323-174956-0.jpg"],
  ["Apérol", "1", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Aperol_Flasche.jpg/220px-Aperol_Flasche.jpg"],
  ["Burrata di Puglia", "1", "https://img-3.journaldesfemmes.fr/dkPEIK-hbc1Jcuk5t37v24_zBaA=/1500x/smart/3629b13607b8460499f0ecfaed20e4f5/ccmcms-jdf/24024010.jpg"],
  ["Tomates Cerises", "1", "https://www.academiedugout.fr/images/16409/1200-auto/fotolia_55078999_subscription_xl-copy.jpg?poix=50&poiy=50"],
  ["Fraises Gariguette", "1", "https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Fraise-700x700.png"],
  ["Prosecco DOC", "1", "https://media.carrefour.fr/medias/812f0746694e3b038cd1cf29857debdb/p_1500x1500/08006220001669-a1n1-s01.jpg"],
  ["Eau Gazeuse Perrier", "1", "https://www.bieres64-40.fr/wp-content/uploads/2022/12/perrier33.png"]
];

// URL de l'API pour les produits du frigo
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/9/produits"
// Liste des aliments dans le frigo (état réactif)
const listFood = reactive([]);
// Texte de recherche (initialisé à vide)
let search = "";
// Propriété pour le critère de recherche
let props = defineProps(["pcritere"])

//Fonction pour récupérer les produits présents dans le frigo, si search est null, affiche tous les produits
function displayFood(){
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      listFood.splice(0, listFood.length);
      for(let f of dataJSON) {
        listFood.push(new Food(f))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
// Fonction pour ajouter un aliment au frigo
function addFood(libelle, qte, photo) {
  window.alert("Vous avez choisi le produit " + libelle);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      id: 1,
      nom: libelle,
      qte: qte,
      photo: photo
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      if(listFood.length>=15){
        window.alert("Vous avez atteint le nombre maximum de produits dans le frigo")
      }else{
        displayFood();
      }
    })
    .catch((error) => console.log(error));
}

</script>

<template>
  <!-- Conteneur principal pour les aliments -->
  <div class="aliments">
    <!-- Grille pour afficher les aliments -->
    <v-row dense>
      <!-- Boucle sur chaque aliment pour l'afficher -->
      <v-col
        v-for="aliment in aliments"
        cols="12"
        sm="6"
        md="3"
        lg="2"
        xl="2">
        <!-- Carte pour chaque aliment -->
        <v-card color="primary">
          <!-- Image de l'aliment -->
          <v-img
            :src="aliment[2]"
            height="200px"
            cover
          ></v-img>
          <!-- Titre de l'aliment -->
          <v-card-title>
            {{ aliment[0]}}
          </v-card-title>
          <!-- Actions pour l'aliment (bouton pour ajouter au frigo) -->
          <v-card-actions>
            <v-btn @click="addFood(aliment[0], 1, aliment[2])">Ajouter au frigo</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Supermarche"
}
</script>

<style scoped>

</style>
