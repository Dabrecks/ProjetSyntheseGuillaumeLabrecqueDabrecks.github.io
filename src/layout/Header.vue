<template>
  <header class="header">
      <!-- NavBar -->
      <div>
        <b-navbar class=" navbar bg-transparent" toggleable="lg" variant="info">
          <b-navbar-brand href="#">
            <img class="logoImg" src="../assets/logoStage.png" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-button class="bouton" variant="success"
                >Trouvez votre stage</b-button
              >
              <b-button class="bouton" variant="success"
                >Trouvez votre future stagiaire</b-button
              >
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-button id="btnConnexion" class="bouton bg-white text-black"
                >Connexion</b-button
              >
              <b-button class="bouton text-black">Inscription</b-button>
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
                <b-form-input placeholder="Mot clés"></b-form-input>
                <b-input-group-append>
                  <b-button variant="info">Rechercher</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <!-- Titre de la page -->
        <b-container class="titre ">
          <b-row>
            <b-col class="textTitre text-white ">Candidats</b-col>
          </b-row>
        </b-container>
      </div>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss">
    .header {
  width: 100%;
  height: fit-content;
  height: 50%;
  background-image: url("../assets/Header.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1% 6% 0 6%;
}
/* navigation */
.navbar {
  padding: 0 !important;
}
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
  color: black;
}
/* centre */
.centre {
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.textCentre {
  font-size: 2rem;
}
// titre
.titre {
  display: flex;
  justify-content: start;
  align-items: flex-start;
}

.textTitre {
  font-size: 60px;
}
</style>