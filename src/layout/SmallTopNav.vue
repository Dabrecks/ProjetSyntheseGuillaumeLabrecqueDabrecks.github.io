<template>
  <div class="">
    <b-row class="topNav">
      <b-col cols="3" class="buttonNavTop">
        <router-link to="/AjoutStage">
          <button>Ajouter une offre de stage</button>
        </router-link> 
      </b-col>
      <b-col cols="3" class="buttonNavTop">
        <router-link to="/AjoutCandidat">
          <button>Créer un profil candidat</button>
        </router-link> 
      </b-col>
      <b-col cols="4" class="profilNavTop text-right mr-5">
        <div cols="8" class="persone">
          <p class="nom mb-0 pb-0">John Dow</p>
          <p class="role mb-0 pb-0">Admin</p>
        </div>
        <div cols="4" class="profilPic"></div>
      </b-col>
      <b-col cols="1" class="iconsNavTop text-right">
        <font-awesome-icon class="iconeCarte" icon="bell" size="lg" />
        <router-link to="/">
          <font-awesome-icon class="iconeCarte" icon="sign-out-alt" size="lg" />
        </router-link> 
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SmallTopNav",
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
.droite {
    height: 100vh;
    .topNav {
      height: 10vh;
      padding: 0px 20px 0px 20px;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: $grisArriereUn;
      button {
        width: 100%;
        border: none;
        box-shadow: $BoxShadow;
        border-radius: 5px;
        background-color: $Blanc;
        color: $bleuPrimaire;
        padding: 5px 12px;
      }
      .profilNavTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .nom {
          color: $Noir;
          font-size: 1rem;
        }
        .role {
          color: $grisArriereSombre;
          font-size: 0.8rem;
        }
        .profilPic {
          height: 45px;
          width: 45px;
          border-radius: 45px;
          margin-left: 15px;
          background-color: $grisArriereSombre;
        }
      }
        .iconsNavTop {
          padding: 0;
          .iconeCarte {
            margin: 0 10px;
            color: $grisArriereSombre;
          }
        }
    }
  }
</style>
