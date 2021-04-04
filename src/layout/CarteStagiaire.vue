<template>
<div>
  <b-row v-for="candidat in candidats" :key="candidat.nom" class="carteSection text-left m-0 mb-4"><!-- v-for="candidat in candidats" :key="candidat.nom" -->
      <b-col cols="8">
        <h4 class="titreCarte"><span>{{ candidat.position }}</span></h4>
        <p class="lieuCarte"><span>{{ candidat.ville }}</span></p>
        <p class="DomaineCarte">
          <span>{{ candidat.formation }}</span>
        </p>
        <p class="DescriptionCarte">
          <span>{{ candidat.description }}</span>
        </p>
        <b-button class="boutonCarte" variant="primary">Primary</b-button>
        <b-button class="boutonCarte" variant="primary">Primary</b-button>
      </b-col>
      <b-col cols="4 p-0" class="logoCarte">
        <b-img src="https://www.capres.ca/wp-content/uploads/2017/03/Ce%CC%81gep_Limoilou.png" fluid alt="Responsive image"></b-img>
        <!-- LOGO -->
      </b-col>
  </b-row>
</div>
</template>

<script>
import json from "../assets/data.json";
export default {
  name: "CarteStagiaire",
  data: function() {
    return {
      candidats: json.candidats, // passing array data into Vue
    };
  },
};
</script>

<style lang="scss">
.listeCandidats {
  margin-bottom: 5%;
}
// Les cartes
.carteSection {
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .titreCarte {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: rgb(52, 52, 255);
  }
  .lieuCarte {
    font-weight: bold;
    color: black;
    margin-bottom: 2px;
  }
  .boutonCarte {
    margin-right: 15px;
  }
  .logoCarte {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
