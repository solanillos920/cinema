<template>
  <v-container id="super-heros">
    
    <!-- INFOS -->
    <h1 class="display-1 font-weight-light">Liste des Super-Héros</h1>
      
    <!-- CHAMP ET BOUTON RECHERCHE PAR MOT CLE -->
    <v-text-field style="width:40%; margin:10px auto;" hint="Merci de confirmer votre recherche." filled v-model="motCherche" color="#e4872c"
      label="Chercher" placeholder="Super-héros, Super-méchants ..."  outlined></v-text-field>
    <v-btn small color="#e4872c" class=" mx-3 mt-3" style="width:30%; margin:auto;" @click=" init()">
      <div class="caption">CONFIRMER LA RECHERCHE</div>
    </v-btn>

    <!-- AFFICHAGE DES FILMS AVEC LOADER -->
    <!-- <v-sheet v-if="motCherche" color="#0b488c5e" class="pa-3">
      <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader> -->
      <mediaGridSuperHeros :movies="movies"></mediaGridSuperHeros>
    <!-- </v-sheet> -->

        <!-- Loading API response -->
    <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>
 
  </v-container>
</template>

<script>
import axios from "axios";
import MediaNav from "../components/MediaNav.vue";
import MediaGridSuperHeros from "../components/MediaGridSuperHeros.vue";

export default {
  components: {
    mediaNav: MediaNav,
    mediaGridSuperHeros: MediaGridSuperHeros,
  },
  data: function () {
    return {
      // API loading animation, error message, API response
      pending: false,
      movies: [],
      pageTitle: "Rechercher par mot-clé :",
      showPagination: false,
      motCherche:"",
    };
  },
  methods: {
    init() {
      const key = "1190710881379673";
      // API request using axios to restcountries.eu
      this.pending = true;
      axios
        .get("https://superheroapi.com/api/"
        +key+"/search/"+this.motCherche)
        .then((response) => { this.movies = response.data.results;})
        .catch((error) => { console.log(error);})
        .finally( () => { this.pending = false });
    }
  },
  mounted() {
    this.init();
  },
  inject: {
      theme: {
        default: { isDark: false },
      },
    },
};
</script>

<style scoped>
body {
  text-align: center;
}
/* loading animation */
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #2b3845; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-bottom: 100px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loaderFlex {
  display: flex;
  justify-content: center;
}
</style>
