<template>
  <div id="app">
    <!-- <SideNavDeux /> -->
    <!-- <Validation /> -->
    <!-- <FicheCandidat /> -->
    <!-- <ListeCandidats /> -->
    <!-- <DemandesStage /> -->
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <Apropos />
    <Candidats />
    <OffreStage />
    <RechercheStage /> 
    <Acceuil /> 
  </div>
</template>

<script>
import Apropos from './components/user/Apropos'
import Candidats from './components/user/Candidats'
import OffreStage from './components/user/OffreStage'
import RechercheStage from './components/user/RechercheStage'
import Acceuil from './components/user/Acceuil'
// import SideNavDeux from './layout/SideNavDeux'
// import Validation from './components/admin/Validation'
// import FicheCandidat from './components/user/FicheCandidat'
// import ListeCandidats from './components/admin/ListeCandidats'
// import DemandesStage from './components/admin/DemandesStage'

export default {
  name: 'App',
  components: {
    Apropos,
    Candidats,
    OffreStage,
    RechercheStage,
    Acceuil,
    // SideNavDeux,
    // Validation,
    // FicheCandidat,
    // ListeCandidats,
    // DemandesStage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
