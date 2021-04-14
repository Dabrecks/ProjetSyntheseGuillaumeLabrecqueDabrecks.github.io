<template>
  <div>
    <b-row >
      <b-col cols="12" class="logoSideNav text-left">
        <img src="../assets/logoStage.png" alt="logoSideNav" />
      </b-col>
    </b-row>
    <b-row m-0 p-0>
      <b-col cols="12" class="sideliste text-left m-0 mb-5 p-0">
        <router-link to="/">
          <a href="#"><font-awesome-icon class="iconeCarte" icon="home" size="lg"/><span>Accueil</span></a>
        </router-link> 
        <!-- <router-link to="/DemandesStage">
          <a href="#"><font-awesome-icon class="iconeCarte" icon="arrow-circle-right" size="lg"/><span>Offres de stage</span></a>
        </router-link>  
          <router-link to="/FicheCandidat">
          <a href="#"><font-awesome-icon class="iconeCarte" icon="arrow-circle-left" size="lg"/><span>Demandes de stage</span></a>
        </router-link>   -->
          <router-link to="/ListeCandidats">
          <a href="#"><font-awesome-icon class="iconeCarte" icon="user-graduate" size="lg"/><span>Candidats</span></a>
        </router-link>  
          <router-link to="/ListeStages">
          <a href="#"><font-awesome-icon class="iconeCarte" icon="user-tie" size="lg"/><span>Entreprises</span></a>
        </router-link>  
        <router-link to="/">
          <a href="#" class="mt-5"><font-awesome-icon class="iconeCarte" icon="sign-out-alt" size="lg"/><span>Déconnexion</span></a>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style lang="scss">
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
.sideNav {
  height: 100vh;
  p {
    color: $Blanc;
    font-size: 1.3rem;
    padding-bottom: 20px;
    padding-left: 15px;
  }
  .gauche {
    height: 100%;
    background-color: $bleuPrimaire;
    a {
      text-decoration: none;
    }
    .logoSideNav img {
      height: 175px;
      margin-bottom: 40px;
      margin: 40px 0px 40px 25px;
    }
    .sideliste {
      padding-bottom: 80px;
      display: flex;
      flex-direction: column;
      a {
        padding: 15px 0px 15px 25px;
        color: $Blanc;
      }
      a:hover {
        background-color: $bleuSecondaire;
      }
      span {
        padding-left: 10px;
      }
    } 
  }
}
</style>
