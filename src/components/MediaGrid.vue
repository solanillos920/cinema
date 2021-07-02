<template>
<v-layout row wrap>
  <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">

    <!-- DEBUT MEDIAS -->
    <v-card hover class="ma-3" min-height="500">
      <v-layout column align-center fill-height class="text-center">

        <!-- IMAGE D'ENTETE -->
        <v-img :src="imageURL + movie.poster_path"></v-img>
        <v-img :src="imageURL + movie.profile_path"></v-img>
        <!-- <v-img :src="movie.image.url"></v-img> -->


        <!-- SOIT LE NOMBRE DE VOTE SOIT LE ROLE DE L'ARTISTE CAR SOIT L'UN SOIT L'AUTRE EXISTE -->
        <!-- NOTE ET NOMBRE DE VOTE -->
        <v-progress-linear v-if="movie.media_type=='tv' || movie.media_type=='movie'" color="#0b488c" class="notation-horizontale" 
        :value="movie.vote_average * 10"> Noté :&nbsp;<span style="color:#e4872c">
          {{movie.vote_average * 10}}</span>&nbsp;/100, pour &nbsp;<span style="color:#e4872c">{{movie.vote_count}}</span>&nbsp;votant!
        </v-progress-linear>
        <!-- PRECISION, Et FRANCISATION POUR ROLE CONNU DE ARTISTE POUR UN HOMME -->
        <v-layout class="text-role-artiste" v-if="movie.gender=='2'">
        <v-card-text v-if="movie.known_for_department=='Acting'"><b>Rôle le plus connu : </b>Acteur<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Sound'"><b>Rôle le plus connu : </b>Ingénieur du Son<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Production'"><b>Rôle le plus connu : </b>Producteur<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Directing'"><b>Rôle le plus connu : </b>Directeur<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Costume & Make-Up'"><b>Rôle le plus connu : </b>Costumes & Maquillages<hr></v-card-text>                
        <v-card-text v-else><b>Rôle le plus connu : </b>{{movie.known_for_department}}<hr></v-card-text>
        </v-layout>
        <!-- PRECISION, Et FRANCISATION POUR ROLE CONNU DE ARTISTE POUR UN HOMME -->
        <v-layout class="text-role-artiste" v-if="movie.gender=='1'">
        <v-card-text v-if="movie.known_for_department=='Acting'"><b>Rôle le plus connu : </b>Actrice<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Sound'"><b>Rôle le plus connu : </b>Ingénieur du Son<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Production'"><b>Rôle le plus connu : </b>Productrice<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Directing'"><b>Rôle le plus connu : </b>Directrice<hr></v-card-text>
        <v-card-text v-else-if="movie.known_for_department=='Costume & Make-Up'"><b>Rôle le plus connu : </b>Costumes & Maquillages<hr></v-card-text>                
        <v-card-text v-else><b>Rôle le plus connu : </b>{{movie.known_for_department}}<hr></v-card-text>
        </v-layout>

        <!-- TITRE OU NOM DU MEDIA -->
        <v-card-title class="font-weight-light">{{movie.title || movie.name}}</v-card-title>
        
        <!-- BOUTONS INFOS SUPPLEMENTAIRES ET INFOS EN EXPANSION PANEL -->
        <v-card-text>
          <v-expansion-panels focusable>
            <v-expansion-panel id="synopsis">
              <!-- BOUTONS OUVERTURE -->
              <v-expansion-panel-header>Infos suppémentaires</v-expansion-panel-header>

              <!-- TYPE DE MEDIA -->
              <v-expansion-panel-content v-if="movie.media_type=='tv'"><b>Type : </b>Série télévisé</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.media_type=='movie'"><b>Type : </b>Film</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.media_type=='person'"><b>Type : </b>Artiste</v-expansion-panel-content>

              <!-- ADULTE TRUE or FALSE + MESSAGE -->
              <v-expansion-panel-content v-if="movie.adult==false">
                <v-icon color="green" left>mdi-checkbox-marked-circle</v-icon>Contenu adapté aux enfants
              </v-expansion-panel-content>                
              <v-expansion-panel-content v-else>
                <v-icon color="red" left>mdi-close-circle</v-icon>Contenu pour adultes
              </v-expansion-panel-content>

              <!-- SYNOPSIS DE MEDIA -->
              <v-expansion-panel-content v-if="movie.overview"><b>Synopsis : </b>{{movie.overview}}</v-expansion-panel-content>

              <!-- AFFICHAGE EN FONCTION DE LA LANGUE VO -->
              <!-- <v-expansion-panel-content>{{movie.original_language}}</v-expansion-panel-content> -->
              <v-expansion-panel-content v-if="movie.original_language=='en'"><b>VO : </b>Anglaise</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='fr'"><b>VO : </b>Française</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='nl'"><b>VO : </b>Néherlandaise</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='es'"><b>VO : </b>Espagnole</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='ja'"><b>VO : </b>Japonaise</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='de'"><b>VO : </b>Allemande</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='it'"><b>VO : </b>Italienne</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='pt'"><b>VO : </b>Portuguaise</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='sv'"><b>VO : </b>Suédoise</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='zh'"><b>VO : </b>Chinoise(Mandarin)</v-expansion-panel-content>
              <v-expansion-panel-content v-if="movie.original_language=='ko'"><b>VO : </b>Coréenne</v-expansion-panel-content>

              <!-- TITRE ORIGINAL DU MEDIA -->
              <v-expansion-panel-content v-if="movie.original_title"><b>Titre original : </b>{{movie.original_title}}</v-expansion-panel-content>
              
              <!-- NOMBRE DE PERSONNES QUI AIMENT -->
              <v-expansion-panel-content v-if="movie.popularity"><b>Popularité : </b>{{movie.popularity}} milles personnes aiment!</v-expansion-panel-content>

              <!-- DATE DE SORTIE DU MEDIA -->
              <v-expansion-panel-content v-if="movie.release_date"><b>Date de sortie : </b>{{movie.release_date}}</v-expansion-panel-content>

              <!-- IMAGE POSTER SUR BOUTON INFO -->
              <v-img :src="imageURL+movie.backdrop_path"></v-img>

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
    props: ["movies", "imageURL"],
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

