<template>
<v-layout row wrap>
  <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">

    <!-- DEBUT MEDIAS -->
    <v-card hover class="ma-3" min-height="500">
      <v-layout column align-center fill-height class="text-center">

        <!-- IMAGE D'ENTETE -->
        <v-img :src="movie.image.url"></v-img>

        <!-- TITRE OU NOM DU MEDIA -->
        <v-card-title class="font-weight-light">{{movie.title || movie.name}}</v-card-title>
        
        <!-- BOUTONS INFOS SUPPLEMENTAIRES ET INFOS EN EXPANSION PANEL -->
        <v-card-text>
          <v-expansion-panels focusable>
            <v-expansion-panel id="synopsis">
              <!-- BOUTONS OUVERTURE -->
              <v-expansion-panel-header>Statistiques Personnels</v-expansion-panel-header>
              <!-- STATISTIQUES -->
              <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.intelligence" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.intelligence"> Intelligence :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.intelligence}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
               <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.strength" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.strength"> Force :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.strength}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.speed" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.speed"> Vitesse :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.speed}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.durability" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.durability"> Durabilité :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.durability}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.power" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.power"> Pouvoir :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.power}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <v-progress-linear  v-if="movie.powerstats.combat" color="#0b488c" class="notation-horizontale" 
                :value="movie.powerstats.combat"> Combat :&nbsp;<span style="color:#e4872c">
                {{movie.powerstats.combat}}</span>&nbsp;/100!
                </v-progress-linear>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <button class="btn-add-modal"  @click="addListeFavoris(movie)">Ajouter aux Favoris</button>
        </v-card-text>

      </v-layout>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
  export default {
    props: ["movies"],
    data() {
      return {};
    }
  };
</script>

<style scoped>
b {
  color: #05213f;
}
div.theme--dark.v-card {
    background-color: #05213f;
    color: #fff;
    min-height:auto !important;
}
div.v-card__title.font-weight-light {
  background-color: #05213f;
    width :100%;
    justify-content: center;
    padding: 5px;
}
div.theme--dark.v-card:hover {
background: #0b488c;
}
div.theme--dark.v-card:hover #synopsis {
/* background: #303030; */
background: #e4872c;
}
#synopsis {
background: #0b488c;
}
.v-progress-linear.notation-horizontale.theme--dark{
height: 30px !important;
width:90%;
border-radius:0 0 5px 5px;
font-size: 12px;
}
div.layout.text-role-artiste .v-card__text{
color:#e4872c;
padding:5px 0 0 0;
}
</style>

