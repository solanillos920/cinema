<template>
  <v-container>

    <media-nav :pageTitle="pageTitle" :sortCriteria="sortCriteria" @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')" @release_date="sortBy('release_date')" 
      @vote_count="sortBy('vote_count')"></media-nav>

    <div class="text-center" v-if="showPagination">
      <v-pagination color="#e4872c" v-model="page" :length="441" :value="page"></v-pagination>
    </div>

  <v-sheet color="#0b488c5e" class="pa-3">
    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
    <media-grid :movies="movies" :imageURL="imageURL"></media-grid>
  </v-sheet>

    <div class="text-center" v-if="showPagination">
      <v-pagination color="#e4872c" v-model="page" :length="441" :value="page"></v-pagination>
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
      mediaNav: MediaNav
    },
    data() {
      return {
        movies: [],
        imageURL: "https://image.tmdb.org/t/p/w1280",
        sortCriteria: "Triés par : les plus populaires",
        pageTitle: "Liste des Films les mieux notés",
        sortedBy: "popularity",
        page: 1,
        showPagination: false
      };
    },
    methods: {
      init() {
        const key = "ad3aba60a11eb6e43170e9c6ec0d00e6";
        axios
          .get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key="
            +key+"&language=fr-FR&page="+this.page
          )
          .then(response => {
            // handle success
            //console.log(response);
            this.movies = response.data.results;
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(() => {
            // always executed
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
      page: function(page) {
        this.init();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style>
</style>
