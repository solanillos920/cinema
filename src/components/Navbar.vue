<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon id="drawerIcon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">APIWorld</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="accent-2">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-img max-width="100px" src="../assets/retro-tv.svg"></v-img>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item v-for="link in links" :key="link.route" link :to="link.route" >
          <v-list-item-icon>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data: function() {
      return {
        drawer: false,
        links: [
          { icon: "mdi-home", text: "Accueil", route: "/" },
          {
            icon: "mdi-filmstrip",
            text: "Films Populaires",
            route: "/films-populaires"
          },
          {
            icon: "mdi-trophy",
            text: "Films les mieux Notés",
            route: "/films-mieux-notes"
          },
          {
            icon: "mdi-television-classic",
            text: "Séries Populaires",
            route: "/series-populaires"
          },
          {
            icon: "mdi-medal",
            text: "Séries les mieux notées",
            route: "/series-mieux-notees"
          },
            {
              icon: "mdi-map-marker-alert",
              text: "Liste des Pays",
              route: "/liste-des-pays"
          },
          // {
          //   icon: "mdi-information",
          //   text: "Dragon Zall Z ",
          //   route: "/DragonBallZ"
          // },
            {
              icon: "mdi-account-supervisor-circle",
              text: "Liste des Super-Héros",
              route: "/SuperHeros"
          },
          {
            icon: "mdi-charity",
            text: "Ma Liste",
            route: "/maListe"
            }
        ]
      };
    }
  };
</script>

<style scoped>
span.font-weight-light {
    padding: 25px;
}
button#drawerIcon{
  border-radius: 25%;;
}
</style>
