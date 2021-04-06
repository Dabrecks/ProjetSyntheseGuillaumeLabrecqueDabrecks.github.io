<template>
  <div class="">
    <b-row class="topNav">
      <b-col cols="3" class="buttonNavTop">
        <button>Ajouter une offre de stage</button>
      </b-col>
      <b-col cols="3" class="buttonNavTop">
        <button>Ajouter une demande de stage</button>
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
.droite {
    height: 100vh;
    .topNav {
      height: 10vh;
      padding: 0px 20px 0px 20px;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: rgb(251, 251, 251);
      button {
        width: 100%;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: 5px;
        background-color: rgb(251, 251, 251);
        color: rgb(36, 122, 202);
        padding: 5px 12px;
      }
      .profilNavTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .nom {
          color: black;
          font-size: 1rem;
        }
        .role {
          color: rgb(129, 129, 129);
          font-size: 0.8rem;
        }
        .profilPic {
          height: 45px;
          width: 45px;
          border-radius: 45px;
          margin-left: 15px;
          background-color: rgb(82, 82, 82);
        }
      }
        .iconsNavTop {
          padding: 0;
          .iconeCarte {
            margin: 0 10px;
            color: rgb(173, 172, 172);
          }
        }
    }
  }
</style>
