<template>
  <v-layout justify-end row class="mt-3 mr-4">
    <v-flex class="ml-5" align-self-center>
      <h1 class="display-1 font-weight-light ">{{ pageTitle }}</h1><hr>
    </v-flex>
    <v-flex align-self-center class="my-3">
      <div class="text-sm-center">

        <p class="font-weight-light">{{ sortCriteria }}</p>

        <v-tooltip  color="#e4872c" top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small color="#e4872c" class="criteriaSelector mx-3 mt-3"
             @click="sortBy('popularity')">
              <v-icon left>mdi-heart</v-icon>
              <span class="caption">Par popularité</span>
            </v-btn>
          </template>
          <span><v-icon left>mdi-information-outline</v-icon>Trier les films par popularité</span>
        </v-tooltip>

        <v-tooltip  color="#e4872c" top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small color="#e4872c"  class="criteriaSelector mx-3 mt-3"
             @click="sortBy('vote_count')">
              <v-icon left>mdi-account-heart</v-icon>
              <span class="caption">Par Nombre de Vote</span>
            </v-btn>
          </template>
          <span><v-icon left>mdi-information-outline</v-icon>Trier les films par nombres de votes</span>
        </v-tooltip>

        <v-tooltip  color="#e4872c" top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small color="#e4872c"  class="criteriaSelector mx-3 mt-3"
             @click="sortBy('vote_average')">
              <v-icon left>mdi-star</v-icon>
              <span class="caption">Par Notation</span>
            </v-btn>
          </template>
          <span><v-icon left>mdi-information-outline</v-icon>Trier les films par notation</span>
        </v-tooltip>

        <v-tooltip  color="#e4872c" top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small color="#e4872c" class="criteriaSelector mx-3 mt-3"
             @click="sortBy('release_date')">
              <v-icon left>mdi-calendar</v-icon>
              <span class="caption">Par Date de Sortie</span>
            </v-btn>
          </template>
          <span><v-icon left>mdi-information-outline</v-icon>Trier les films par date de Sortie</span>
        </v-tooltip>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["pageTitle", "sortCriteria"],
  data() {
    return {};
  },
  methods: {
    sortBy(prop) {
      this.$emit(prop);
    },
  },
};
</script>

<style scoped>


</style>
