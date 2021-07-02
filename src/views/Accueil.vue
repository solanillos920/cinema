<template>
  <v-container id="accueil">
    
    <!-- INFOS -->
    <h1 class="display-3 my-3 my-5">APIWorld</h1>
    <p>Ce site contient plus de <b>8820 Films</b> et <b>1880 Séries</b>!</p>
      
    <!-- CHAMP ET BOUTON RECHERCHE PAR MOT CLE -->
    <v-text-field style="width:30%; margin:auto;" hint="Merci de confirmer votre recherche." filled v-model="motCherche" color="#e4872c"
      label="Chercher" placeholder="Film, Series, Artistes ..." outlined></v-text-field>
    <v-btn small color="#e4872c" class=" mx-3 mt-3" @click=" init()">
      <div class="caption">CONFIRMER LA RECHERCHE</div>
    </v-btn>

    <!-- BOUTONS TYPE DE TRI DES FILMS -->
    <media-nav  v-if="motCherche" :pageTitle="pageTitle" :sortCriteria="sortCriteria"
     @popularity="sortBy('popularity')" @vote_average="sortBy('vote_average')"
     @release_date="sortBy('release_date')" @vote_count="sortBy('vote_count')"></media-nav>

    <!-- PAGINATION DEBUT DE PAGE -->
    <div v-if="motCherche" class="text-center"><!-- anciennement v-if showPagination -->
      <v-pagination color="#e4872c" v-model="page" :length="20" :value="page"></v-pagination>
    </div>

    <!-- AFFICHAGE DES FILMS AVEC LOADER -->
    <v-sheet v-if="motCherche" color="#0b488c5e" class="pa-3">
      <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
      <media-grid :movies="movies" :imageURL="imageURL"></media-grid>
    </v-sheet>

    <!-- PAGINATION FIN DE PAGE -->
    <div v-if="motCherche" class="text-center"><!-- anciennement v-if showPagination -->
      <v-pagination color="#e4872c" v-model="page" :length="20" :value="page"></v-pagination>
    </div>
   
  </v-container>
</template>

<script>
import axios from "axios";
import MediaGrid from "../components/MediaGrid.vue";
import MediaNav from "../components/MediaNav.vue";

export default {
  components: {
    mediaGrid: MediaGrid,
    mediaNav: MediaNav,
  },
  data: function () {
    return {
      movies: [],
      pageTitle: "Rechercher par mot-clé :",
      imageURL: "https://image.tmdb.org/t/p/original",
      sortCriteria: "Triés par : les plus populaires",
      sortedBy: "popularity",
      page: 1,
      showPagination: false,
      motCherche:"",
    };
  },
  methods: {
    init() {
      const key = "ad3aba60a11eb6e43170e9c6ec0d00e6";
      axios
        .get("https://api.themoviedb.org/3/search/multi?api_key="
        +key+"&language=fr-FR&query="+this.motCherche+"&page="+this.page+"&include_adult=true")
        .then((response) => { this.movies = response.data.results;})
        .catch((error) => { console.log(error);})
        .finally(() => {
          this.sortBy(this.sortedBy);
          this.showPagination = true;
        });
    },
    sortBy(prop) {
            if (prop === "popularity") {
        this.sortCriteria = "Triés par : les plus populaires";
      } else if (prop === "vote_average") {
        this.sortCriteria = "Triés par : les mieux notés";
      } else if (prop === "release_date") {
        this.sortCriteria = "Triés par : sorties les plus récentes";
      } else if (prop === "vote_count") {
        this.sortCriteria = "Triés par : le plus grand nombre de vote";
      }
      this.sortedBy = prop;
      this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },
  watch: {
    page: function (page) {
      this.init();
    },
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
#accueil {
  text-align: center;
}

</style>
