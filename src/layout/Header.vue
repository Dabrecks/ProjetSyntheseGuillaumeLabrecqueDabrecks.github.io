<template>
  <header class="header">
      <!-- NavBar -->
      <div>
        <b-navbar class=" navbar bg-transparent" toggleable="lg" variant="info">
           <router-link to="/">
            <b-navbar-brand >
              <img class="logoImg" src="../assets/logoStage.png" />
            </b-navbar-brand>
          </router-link>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link to="/OffreStages">
              <b-button class="bouton" variant="success"
                >Trouvez votre stage</b-button
              >
              </router-link> 
              <router-link to="/OffreCandidats">
              <b-button class="bouton" variant="success"
                >Trouvez votre future stagiaire</b-button
              >
              </router-link>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <router-link to="/Connexion">
                <b-button id="btnConnexion" class="bouton bg-white text-black"
                  >Connexion</b-button
                >
              </router-link> 
              <router-link to="/Inscription"> 
                <b-button class="bouton text-black">Inscription</b-button>
              </router-link> 
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!-- centre du header -->
      <div>
        <b-container class="centre" align-v="center" align-self="center">
          <b-row>
            <b-col cols="12" class=" textCentre text-white"
              >Trouvez votre stage!</b-col
            >
            <b-col cols="12">
              <b-input-group>
                <b-form-input v-model="search" placeholder="Mot clés"></b-form-input>
                <b-input-group-append>
                  <b-button @click="addFilter(search)" variant="primary">Rechercher</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <!-- Titre de la page -->
        <b-container class="titre ml-0 pl-0">
          <b-row>
            <b-col class="textTitre text-white "><p>{{ titreHeader }}</p></b-col>
            <!-- test pour être certain que j'ai bien la valeur du Search -->
            <!-- <b-col class="textTitre text-white "><p>{{ search }}</p></b-col> -->
          </b-row>
        </b-container>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: ['titreHeader'],
  data() {
    return {
      search:""
    }
  },
  // Retourner la valeur du search vers le parent OffreStages
  methods: {
    addFilter(search) {
      this.$emit('update-search', search)
    }
  }
}
</script>

<style lang="scss">
//mes variables scss
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
.header {
  width: 100%;
  height: fit-content;
  height: 50%;
  background-image: url("../assets/Header.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1% 6% 0 6%;
  .navbar {
    padding: 0 !important;
    a.navbar-brand {
      margin-right: 40px;
    }
    .logoImg {
      height: 40px;
    }
    .bouton {
      margin-right: 10px;
      border: none !important;
    }
    #btnConnexion {
      color: $Noir;
    }
  }
  .centre {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .textCentre {
      font-size: 2rem;
    }
  }
  .titre {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    .textTitre p{
      font-size: 60px;
    }
  }
}
</style>