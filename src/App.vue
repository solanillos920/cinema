<template>
<div id="app" :class="{ darkApp : isDarkTheme }">
  <v-app>
    <app-navbar></app-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</div>

</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      appNavbar: Navbar,
      appFooter: Footer
    },
    data () {
    return {
      isDarkTheme: false,
    }
  },
  watch: {
    '$route': {
      handler: (to) => {
        document.title = to.meta.title || '';
      },
      immediate: true
    }
  }
  };
</script>

<style>
body div#app{
font-family: 'Teko', sans-serif !important;
font-size:1.8rem;
}
.v-toolbar__title{
color: white;
font-family: 'Teko', sans-serif;
}
h1{
  color: #e4872c;
  background-color: white;
  padding: 15px;
  border-radius: 15px 15px 0 0;
  width:80%;
  margin:auto;
  font-size:25px;
  font-family: 'Teko', sans-serif;
    text-align: center;
}
h2 {
  background-color:#0b488c;
  color:white;
  font-family: 'Teko', sans-serif;
  padding:10px 0 5px 0;
  font-size:30px;
}
.container {
 text-align: center;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #0b488c;
}
.theme--dark.v-navigation-drawer {
    background-color: #0b488c;
    text-align: center;
}
.v-list .v-list-item--active {
    color: #0b488c;
}
a.v-list-item.v-list-item--link.theme--dark {
    background-color: #e4872c;
    border-bottom: 1px solid white;
}
a.v-list-item.v-list-item--link.theme--dark:hover {
    background-color: #f0bb86;
}
button.v-app-bar__nav-icon.v-btn.v-btn--icon.v-btn--round.theme--dark.v-size--default {
    background-color: #e4872c;
}
footer.v-footer.v-sheet.theme--dark.v-footer--fixed, footer.v-footer.v-sheet.theme--dark.v-footer--absolute{
    background-color: #0b488c; 
}
div.theme--dark.v-application{
  background: linear-gradient(90deg, #07305d 1%, #000 1%, #000 49%, #07305d 49%, #07305d 51%, #000 51%, #000 99%, #07305d 99%);
  background-size: 3px 30px;
  background-position: 40px 40px;
}
nav.v-navigation-drawer {
    top: 75px !important;
    height: auto !important;
    border-radius:0 10px 50px 0;
}
.font-weight-light {
    text-align: center;
}
header.v-sheet.v-sheet--tile.theme--dark.v-toolbar.v-toolbar--flat.v-app-bar.v-app-bar--fixed {
  left:0 !important;
}

.v-application .font-weight-light {
    background-color: #020e1b;

}

/* centrage du tiire h1 */
.v-application .ml-5 {
    width: 100%;
}
/* 
pagination */
  .theme--dark.v-pagination button.v-pagination__item {
      background: #0b488c;
      font-size: 20px;
  }
  .theme--dark.v-pagination button.v-pagination__navigation {
      background: #e4872c;
  }

/* ::-webkit-scrollbar */
::-webkit-scrollbar {
 width: 15px;
 height: 15px;
}
::-webkit-scrollbar-thumb {
 background: #E4872C;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
 background: #F0BB86;
}
::-webkit-scrollbar-track{
 background: #0b488c;
}
/* RESPONSIVE */
.v-application .my-3 {
    text-align: center;
}
</style>
