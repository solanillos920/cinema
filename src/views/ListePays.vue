<template>
  <div class="home">
    <!-- Top left search bar component -->
    <div class="searchBar">
      <div class="searchContainer">
        <i class="fas fa-search searchIcon"></i>
        <input 
          class="searchInput" 
          type="text" 
          v-model="search"
          aria-label="Chercher un pays ..."
          placeholder="Chercher un pays ..."
        />
        <ul class="searchResults"></ul>
      </div>
    <!-- Top right dropdown region selector -->
      <div class="dropdownDiv">
        <!-- Default text changes after selecting a region -->
        <a class="dropdownBtn" v-if="!showAllRegion" v-on:click="showFilter = !showFilter">Filtrer par continent :</a>
        <a class="dropdownBtn" v-else v-on:click="showFilter = !showFilter">
            {{ region }} 
        </a>
        <!-- Dropdown list of regions -->
        <ul v-if="showFilter" class="dropdownUL">
          <li>
            <label for="radioAfrica">Afrique
            <input 
              id="radioAfrica" 
              class="dropdownInput" 
              type="radio" 
              name="africa" 
              value="Africa" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            </label>
          </li>
          <li>
            <input 
              id="radioAmerica" 
              class="dropdownInput" 
              type="radio" 
              name="america" 
              value="America" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            <label for="radioAmerica">Amérique</label>
          </li>
          <li>
            <input 
              id="radioAsia" 
              class="dropdownInput" 
              type="radio" 
              name="asia" 
              value="Asia" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            <label for="radioAsia">Asie</label>
          </li>
          <li>
            <input 
              id="radioEurope" 
              class="dropdownInput" 
              type="radio" 
              name="europe" 
              value="Europe" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            <label for="radioEurope">Europe</label>
          </li>
          <li>
            <input 
              id="radioOceania" 
              class="dropdownInput" 
              type="radio" 
              name="oceania" 
              value="Oceania" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            <label for="radioOceania">Océanie</label>
          </li>
          <!-- After selecting a region this "All Regions" option becomes available -->
          <li v-if="showAllRegion">
            <input 
              id="radioAll" 
              class="dropdownInput" 
              type="radio" 
              name="all" 
              value="All Regions" 
              v-model="region" 
              v-on:click="handleFilterClick"
            />
            <label for="radioAll">Toutes les régions</label>
          </li>
        </ul>
      </div>
    </div>
    <!-- <SearchBar /> -->

    <!-- Error Handling -->
    <h1 v-if="error !== null">Désolé il y a une erreur {{error}}</h1>
    <!-- Loading API response -->
    <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>

    <!-- API response data -->
    <div v-if="countryInfo" class="tileGrid">
      <div v-for="country in filteredCountries" class="countryTile" v-bind:key="country.id">
        <router-link 
          :to="{ name: 'country-detail', params: {country: country.name }}" 
          class="linkTile">
          <img v-bind:src="country.flag" alt="Drapeau du pays" class="flag">
          <div class="text">
            <h1>{{ country.translations.fr }}</h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Axios for API requests
import axios from 'axios';

export default {
  data () {
    return {
      // API loading animation, error message, API response
      pending: false,
      error: null,
      countryInfo: null,
      // Search bar's default value
      search: '',
      // v-if data "showFilter": toggles hide/display dropdown list
      showFilter: false,
      // v-if data "showAllRegion": After first selection "All Regions" option becomes available
      showAllRegion: false,
      // v-model data "region": Automatically updates the dropdown heading text
      region: '',
    }
  },
  mounted () {
    // API request using axios to restcountries.eu
    this.pending = true;
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => (this.countryInfo = response.data))
      .catch(error => (this.error = error ))
      .finally( () => { this.pending = false });
  },
  // Function to format the population number with commas
  filters: {
    formatNumbers (value) {
      return `${value.toLocaleString()}`
    }
  },
  // Search and dropdown filter results - Computed function are always watching for changes
  computed: {
    filteredCountries: function () {
      return this.countryInfo.filter((country) => {
        if (this.region === '' || this.region === 'Toutes les régions') {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else if (this.search !== '') {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else {
          return country.region.match(this.region);
        }
      })
    }
  },
  // Vue.JS bug with using v-model and v-on:click with a radio input so need to call this function and run a setTimeout to excute click events after input is checked
  methods: {
    handleFilterClick () {
      setTimeout(() => {
        this.showFilter = !this.showFilter;
        this.showAllRegion = true;
      })
    }
  }
}
</script>

<style scoped>
.v-application p {
    color: #08315e;
}
/* Search bar styles */
.searchBar {
  padding: 35px 75px;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.searchContainer {
  color:#08315e;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  width: 500px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.searchIcon {
  font-size: 16px;
  color: #08315e;
  padding-right: 30px;
}

.searchInput {
  border: none;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
  width: 420px;
}

/* Dropdown region selector Styles */
.dropdownBtn {
  display: block;
  background: #fff;
  height: 50px;
    width: auto;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #08315e;
}
.dropdownUL {
  padding-left: 0;
  text-align: left;
  background-color: #fff;
  margin-top: 3px;
  padding: 10px 0; 
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  position: absolute;
  width: 220px;
}

.dropdownUL li {
  list-style: none;
  line-height: 2;
  cursor: pointer;
    color: #08315e;

}

.dropdownUL li label {
  cursor: pointer;
  padding: 0 26px;
  display: block;
  width: 148px;
}

.dropdownUL li:hover {
  background-color: #f9f9f9;
}

.dropdownInput {
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
}

input[type="radio"] {
  -webkit-appearance: radio;
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

.tileGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 50px 0;
  margin: 0 auto;
  max-width: 1450px;
}

.countryTile {
  display: inline-block;
  background-color: #fff;
  width: 300px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  text-align: left;
  margin: 0 5px 40px;
  text-decoration: none;
  color: inherit;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.linkTile {
  display: inline-block;
  width: 300px;
  height: auto;
  text-decoration: none;
  color: inherit;
}

.flag {
  height: 180px;
  width: 300px;
  border-radius: 3px 3px 0 0;
}

.text {
  padding-left: 30px;
  padding-right: 20px;
}

.text h1 {
  font-size: 20px;
}

.text p span {
  font-weight: 600;
}

.text p {
  line-height: 1;
}

::placeholder {
  font-weight: 600;
}




@media (max-width: 875px) {
  .tileGrid {
    justify-content: center;
    padding-left: 50px;
  }

  .searchBar {
    flex-direction: column;
    padding: 25px 15px;
  }

  .searchContainer {
    width: inherit;
  }

  .dropdownDiv {
    margin-top: 40px;
  }
}

</style>
